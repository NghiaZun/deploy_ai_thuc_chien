(function () {
  "use strict";

  var data = window.COMIC_DATA;
  if (!data || !Array.isArray(data.pages)) {
    return;
  }

  var stage = document.getElementById("comicStage");
  var dots = document.getElementById("pageDots");
  var previousButton = document.getElementById("previousPage");
  var nextButton = document.getElementById("nextPage");
  var currentPageLabel = document.getElementById("currentPage");
  var totalPagesLabel = document.getElementById("totalPages");
  var progressBar = document.getElementById("progressBar");
  var progressFill = document.getElementById("progressFill");
  var historyDialog = document.getElementById("historyDialog");
  var aboutDialog = document.getElementById("aboutDialog");
  var audioButton = document.getElementById("audioButton");
  var audioStatus = document.getElementById("audioStatus");
  var pageElements = [];
  var dotElements = [];
  var selectedHistory = null;
  var historyTrigger = null;
  var currentAudio = null;
  var currentSpeech = null;
  var audioPlaying = false;
  var activePage = 1;

  function element(tag, className, textValue) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (textValue !== undefined && textValue !== null) node.textContent = textValue;
    return node;
  }

  function pageFromHash() {
    var match = /^#trang-(\d+)$/.exec(window.location.hash);
    var requested = match ? Number(match[1]) : 1;
    return requested >= 1 && requested <= data.pages.length ? requested : 1;
  }

  function createPlaceholder(panel) {
    var placeholder = element("div", "art-placeholder");
    placeholder.setAttribute("aria-hidden", "true");

    var ornament = element("span", "placeholder-ornament");
    var number = element("span", "placeholder-panel-id", panel.id);
    var shape = element("span", "placeholder-shape");
    var caption = element("span", "placeholder-caption", panel.artHint || panel.visual);
    var hint = element("span", "placeholder-hint", "Hình minh họa sẽ bổ sung");

    placeholder.appendChild(ornament);
    placeholder.appendChild(shape);
    placeholder.appendChild(number);
    placeholder.appendChild(caption);
    placeholder.appendChild(hint);
    return placeholder;
  }

  function setPercentBox(node, box) {
    node.style.left = box.x + "%";
    node.style.top = box.y + "%";
    node.style.width = box.w + "%";
    node.style.height = box.h + "%";
  }

  function createImageText(panel) {
    var labels = Array.isArray(panel.overlayLabels) ? panel.overlayLabels : [];
    if (!panel.captionBox && !labels.length) return null;

    var layer = element("div", "panel-text-layer");
    if (panel.captionBox) {
      var captionClass = "panel-caption-box";
      if (panel.captionBox.variant) captionClass += " panel-caption-box--" + panel.captionBox.variant;
      if (panel.captionBox.compact) captionClass += " is-compact";
      var caption = element("div", captionClass);
      setPercentBox(caption, panel.captionBox);
      if (!panel.captionBox.hideSpeaker && panel.speaker) {
        caption.appendChild(element("span", "image-caption-speaker", panel.speaker));
      }
      caption.appendChild(element("p", "", panel.dialogue));
      layer.appendChild(caption);
    }

    labels.forEach(function (label) {
      var labelClass = "image-overlay-label";
      if (label.variant) labelClass += " image-overlay-label--" + label.variant;
      var node = element("span", labelClass, label.text);
      setPercentBox(node, label);
      layer.appendChild(node);
    });
    return layer;
  }

  function createHistoryHotspot(panel) {
    var history = data.histories[panel.historyId];
    if (!history || !panel.hotspot) return null;

    var isLandmark = panel.hotspotKind === "landmark";
    var hotspot = element("button", "history-hotspot" + (isLandmark ? " is-landmark" : ""));
    hotspot.type = "button";
    hotspot.setAttribute("aria-label", "Mở tư liệu về " + history.place + ": " + history.title);
    hotspot.style.left = panel.hotspot.x + "%";
    hotspot.style.top = panel.hotspot.y + "%";
    hotspot.style.width = panel.hotspot.w + "%";
    hotspot.style.height = panel.hotspot.h + "%";

    var marker = element("span", "hotspot-marker");
    marker.setAttribute("aria-hidden", "true");
    marker.textContent = "✧";
    var cue = element("span", "hotspot-cue", isLandmark ? "Xem tư liệu" : "Khám phá");
    var preview = element("span", "history-preview");
    preview.setAttribute("aria-hidden", "true");
    preview.appendChild(element("span", "history-preview-kicker", history.place));
    preview.appendChild(element("strong", "history-preview-title", history.title));
    preview.appendChild(element("span", "history-preview-copy", history.facts[0]));
    preview.appendChild(element("span", "history-preview-action", "Nhấp hoặc chạm để đọc và nghe →"));

    hotspot.appendChild(marker);
    hotspot.appendChild(cue);
    hotspot.appendChild(preview);
    hotspot.addEventListener("click", function () {
      openHistory(panel.historyId, hotspot);
    });
    return hotspot;
  }

  function createPanel(panel, index) {
    var article = element("article", "comic-panel size-" + panel.size + " scene-" + panel.scene);
    article.setAttribute("aria-label", "Khung " + (index + 1) + ": " + panel.visual);
    if (panel.image) article.classList.add("has-image");
    if (panel.hotspotKind === "landmark") article.classList.add("has-landmark-hotspot");

    var art = element("div", "panel-art");
    if (panel.image) {
      var image = element("img", "panel-image");
      image.src = panel.image;
      image.alt = panel.visual;
      image.loading = "lazy";
      image.decoding = "async";
      image.addEventListener("error", function () {
        image.replaceWith(createPlaceholder(panel));
      }, { once: true });
      art.appendChild(image);
    } else {
      art.appendChild(createPlaceholder(panel));
    }

    if (panel.sign) {
      var sign = element("span", "panel-sign" + (panel.signBox ? " panel-sign--placed" : ""), panel.sign);
      if (panel.signBox) setPercentBox(sign, panel.signBox);
      art.appendChild(sign);
    }
    if (panel.historyId) {
      art.appendChild(createHistoryHotspot(panel));
    }
    var imageText = createImageText(panel);
    if (imageText) art.appendChild(imageText);

    var corner = element("span", "panel-corner", panel.id);
    corner.setAttribute("aria-hidden", "true");
    var speech = null;
    if (!panel.captionBox) {
      speech = element("div", "speech-bubble");
      speech.appendChild(element("span", "speech-speaker", panel.speaker));
      speech.appendChild(element("p", "", panel.dialogue));
    }

    article.appendChild(art);
    article.appendChild(corner);
    if (speech) article.appendChild(speech);
    return article;
  }

  function createPrintFact(historyId) {
    var history = data.histories[historyId];
    var fact = element("aside", "print-fact");
    fact.appendChild(element("strong", "", "TƯ LIỆU · " + history.place));
    fact.appendChild(element("p", "print-story", "Trong truyện: " + history.story));
    history.facts.forEach(function (line) {
      fact.appendChild(element("p", "", line));
    });
    history.sources.forEach(function (source) {
      fact.appendChild(element("small", "", "Nguồn: " + source.label + " — " + source.url));
    });
    return fact;
  }

  function createPage(page) {
    var section = element("section", "comic-page");
    section.dataset.page = String(page.number);
    section.setAttribute("aria-label", "Trang " + page.number + ": " + page.title);

    var header = element("div", "comic-page-header");
    var headline = element("div", "comic-page-headline");
    headline.appendChild(element("span", "page-chapter", page.chapter));
    headline.appendChild(element("h3", "", page.title));
    header.appendChild(headline);
    header.appendChild(element("span", "page-stamp", String(page.number).padStart(2, "0") + " / 09"));
    section.appendChild(header);
    section.appendChild(element("p", "page-note", page.note));

    var grid = element("div", "panel-grid panel-count-" + page.panels.length);
    page.panels.forEach(function (panel, index) {
      grid.appendChild(createPanel(panel, index));
    });
    section.appendChild(grid);

    var seenHistoryIds = new Set();
    var facts = page.panels.filter(function (panel) {
      if (!panel.historyId || seenHistoryIds.has(panel.historyId)) return false;
      seenHistoryIds.add(panel.historyId);
      return true;
    });
    if (facts.length) {
      section.classList.add("has-print-facts");
      var printFacts = element("div", "print-facts");
      facts.forEach(function (panel) {
        printFacts.appendChild(createPrintFact(panel.historyId));
      });
      section.appendChild(printFacts);
    }
    section.appendChild(element("div", "comic-page-footer", "CHIẾC HỘP CỦA NGÀY MAI · " + String(page.number).padStart(2, "0")));
    return section;
  }

  function renderAllPages() {
    var fragment = document.createDocumentFragment();
    data.pages.forEach(function (page) {
      var section = createPage(page);
      pageElements.push(section);
      fragment.appendChild(section);
    });
    stage.appendChild(fragment);

    data.pages.forEach(function (page) {
      var dot = element("button", "page-dot", String(page.number));
      dot.type = "button";
      dot.setAttribute("aria-label", "Đến trang " + page.number + ": " + page.title);
      dot.addEventListener("click", function () {
        navigateTo(page.number);
      });
      dotElements.push(dot);
      dots.appendChild(dot);
    });
    totalPagesLabel.textContent = String(data.pages.length).padStart(2, "0");
    progressBar.setAttribute("aria-valuemax", String(data.pages.length));
  }

  function closeAnyHistory() {
    if (historyDialog.open) {
      historyDialog.close();
    }
  }

  function showPage(number, scrollToReader) {
    if (number < 1 || number > data.pages.length) return;
    closeAnyHistory();
    activePage = number;

    pageElements.forEach(function (page, index) {
      page.hidden = index !== number - 1;
    });
    dotElements.forEach(function (dot, index) {
      var selected = index === number - 1;
      dot.classList.toggle("is-current", selected);
      if (selected) dot.setAttribute("aria-current", "page");
      else dot.removeAttribute("aria-current");
    });

    currentPageLabel.textContent = String(number).padStart(2, "0");
    progressBar.setAttribute("aria-valuenow", String(number));
    progressFill.style.width = ((number / data.pages.length) * 100) + "%";
    previousButton.disabled = number === 1;
    nextButton.disabled = number === data.pages.length;
    nextButton.innerHTML = number === data.pages.length ? "Đã hết truyện <span aria-hidden='true'>✓</span>" : "Trang tiếp <span aria-hidden='true'>→</span>";

    if (scrollToReader) {
      document.querySelector(".reader").scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start"
      });
    }
  }

  function navigateTo(number) {
    if (number < 1 || number > data.pages.length) return;
    var nextHash = "#trang-" + number;
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    } else {
      showPage(number, true);
    }
  }

  function clearAudioStatus() {
    audioButton.innerHTML = "<span aria-hidden='true'>◖))</span> Nghe kể";
    audioButton.setAttribute("aria-pressed", "false");
    audioPlaying = false;
  }

  function stopAudio() {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio = null;
    }
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    currentSpeech = null;
    clearAudioStatus();
  }

  function audioDone() {
    currentAudio = null;
    currentSpeech = null;
    clearAudioStatus();
    audioStatus.textContent = "Đã phát xong. Bạn có thể nghe lại.";
  }

  function startAudio() {
    if (!selectedHistory) return;
    if (audioPlaying) {
      stopAudio();
      audioStatus.textContent = "Đã dừng âm thanh.";
      return;
    }

    var history = data.histories[selectedHistory];
    audioButton.innerHTML = "<span aria-hidden='true'>Ⅱ</span> Dừng nghe";
    audioButton.setAttribute("aria-pressed", "true");
    audioPlaying = true;

    if (history.audioSrc) {
      currentAudio = new Audio(history.audioSrc);
      currentAudio.addEventListener("ended", audioDone, { once: true });
      currentAudio.addEventListener("error", function () {
        stopAudio();
        audioStatus.textContent = "Không mở được tệp âm thanh. Nội dung đầy đủ vẫn có ở trên.";
      }, { once: true });
      currentAudio.play().then(function () {
        audioStatus.textContent = "Đang phát bản ghi âm của truyện.";
      }).catch(function () {
        stopAudio();
        audioStatus.textContent = "Trình duyệt chặn âm thanh. Hãy thử bấm Nghe kể lần nữa.";
      });
      return;
    }

    if ("speechSynthesis" in window && "SpeechSynthesisUtterance" in window) {
      currentSpeech = new SpeechSynthesisUtterance(history.narration);
      currentSpeech.lang = "vi-VN";
      currentSpeech.rate = 0.91;
      currentSpeech.pitch = 1;
      var voices = window.speechSynthesis.getVoices();
      var vietnameseVoice = voices.find(function (voice) {
        return /^vi(?:-|_)/i.test(voice.lang);
      });
      if (vietnameseVoice) currentSpeech.voice = vietnameseVoice;
      currentSpeech.onend = audioDone;
      currentSpeech.onerror = function () {
        stopAudio();
        audioStatus.textContent = "Thiết bị không phát được giọng đọc. Bạn vẫn có thể đọc phần chữ.";
      };
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(currentSpeech);
      audioStatus.textContent = vietnameseVoice
        ? "Đang đọc bằng giọng tiếng Việt của trình duyệt."
        : "Đang dùng giọng của thiết bị; cách phát âm có thể khác.";
      return;
    }

    clearAudioStatus();
    audioStatus.textContent = "Thiết bị chưa hỗ trợ giọng đọc. Nội dung đầy đủ có ở trên.";
  }

  function appendHistoryContent(history) {
    document.getElementById("historyNumber").textContent = history.number;
    document.getElementById("historyPlace").textContent = history.place;
    document.getElementById("historyTitle").textContent = history.title;
    document.getElementById("historyLead").textContent = history.lead;
    document.getElementById("historyStory").textContent = history.story;
    document.getElementById("historySymbol").textContent = history.symbol;
    document.getElementById("historyVisualLabel").textContent = history.visualLabel;

    var visual = document.getElementById("historyVisual");
    visual.className = "dialog-visual " + history.visualClass;

    var facts = document.getElementById("historyFacts");
    facts.replaceChildren();
    history.facts.forEach(function (fact, index) {
      var row = element("div", "fact-row");
      row.appendChild(element("span", "fact-index", String(index + 1).padStart(2, "0")));
      row.appendChild(element("p", "", fact));
      facts.appendChild(row);
    });

    var sources = document.getElementById("historySources");
    sources.replaceChildren();
    sources.appendChild(element("span", "source-heading", "NGUỒN KIỂM CHỨNG"));
    history.sources.forEach(function (source) {
      var link = element("a", "source-link", source.label + " ↗");
      link.href = source.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      sources.appendChild(link);
    });
  }

  function openHistory(id, trigger) {
    var history = data.histories[id];
    if (!history) return;
    stopAudio();
    selectedHistory = id;
    historyTrigger = trigger;
    appendHistoryContent(history);
    audioStatus.textContent = "Âm thanh chỉ phát khi bạn chọn.";
    if (typeof historyDialog.showModal === "function") {
      historyDialog.showModal();
    } else {
      historyDialog.setAttribute("open", "");
    }
    document.getElementById("closeHistory").focus();
  }

  function closeHistory() {
    stopAudio();
    if (typeof historyDialog.close === "function" && historyDialog.open) {
      historyDialog.close();
    } else {
      historyDialog.removeAttribute("open");
    }
    selectedHistory = null;
    if (historyTrigger) historyTrigger.focus();
  }

  function showAbout() {
    if (typeof aboutDialog.showModal === "function") aboutDialog.showModal();
    else aboutDialog.setAttribute("open", "");
    document.getElementById("closeAbout").focus();
  }

  function closeAbout() {
    if (typeof aboutDialog.close === "function" && aboutDialog.open) aboutDialog.close();
    else aboutDialog.removeAttribute("open");
    document.getElementById("aboutButton").focus();
  }

  renderAllPages();
  showPage(pageFromHash(), false);

  previousButton.addEventListener("click", function () { navigateTo(activePage - 1); });
  nextButton.addEventListener("click", function () { navigateTo(activePage + 1); });
  window.addEventListener("hashchange", function () { showPage(pageFromHash(), true); });
  window.addEventListener("beforeprint", stopAudio);

  document.addEventListener("keydown", function (event) {
    if (historyDialog.open || aboutDialog.open) return;
    var tag = document.activeElement ? document.activeElement.tagName : "";
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
    if (event.key === "ArrowLeft") navigateTo(activePage - 1);
    if (event.key === "ArrowRight") navigateTo(activePage + 1);
  });

  document.getElementById("closeHistory").addEventListener("click", closeHistory);
  historyDialog.addEventListener("close", function () {
    stopAudio();
    selectedHistory = null;
  });
  historyDialog.addEventListener("click", function (event) {
    if (event.target === historyDialog) closeHistory();
  });
  audioButton.addEventListener("click", startAudio);

  document.getElementById("aboutButton").addEventListener("click", showAbout);
  document.getElementById("closeAbout").addEventListener("click", closeAbout);
  aboutDialog.addEventListener("click", function (event) {
    if (event.target === aboutDialog) closeAbout();
  });
})();
