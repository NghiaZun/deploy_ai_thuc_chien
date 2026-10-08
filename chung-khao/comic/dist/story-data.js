/* Replace image: null with a relative path such as "./assets/images/P03B.webp".
   The history hotspots remain active above the image. Adjust hotspot percentages
   after inserting art so the interactive area stays over the intended object. */
window.COMIC_DATA = {
  title: "Chiếc hộp của ngày mai",
  histories: {
    DH01: {
      number: "01 / 03",
      place: "Làng tranh Đông Hồ",
      title: "Màu sắc từ bàn tay người thợ",
      lead: "Một mảnh tranh nhỏ đưa Hoa, Trung và Mây đến với nghề làm tranh dân gian Đông Hồ.",
      facts: [
        "Tranh dân gian Đông Hồ truyền thống được in trên giấy dó quét điệp.",
        "Màu sắc truyền thống của tranh được tạo từ những nguyên liệu tự nhiên."
      ],
      sources: [
        { label: "Cục Di sản văn hóa · Tranh dân gian Đông Hồ", url: "https://dsvh.gov.vn/tranh-dan-gian-dong-ho-3151" }
      ],
      narration: "Tranh dân gian Đông Hồ truyền thống được in trên giấy dó quét điệp. Màu sắc truyền thống của tranh được tạo từ những nguyên liệu tự nhiên.",
      audioSrc: null,
      symbol: "✺",
      visualLabel: "GIẤY · MÀU · NÉT IN",
      visualClass: "history-dongho"
    },
    BD01: {
      number: "02 / 03",
      place: "Quảng trường Ba Đình",
      title: "Hai mốc thời gian, một địa điểm",
      lead: "Tấm ảnh đưa nhóm đến Ba Đình. Mây tách rõ sự kiện diễn ra năm 1945 và công trình được xây sau đó.",
      facts: [
        "Ngày 02/9/1945, tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập.",
        "Lăng Chủ tịch Hồ Chí Minh được khánh thành ngày 29/8/1975."
      ],
      sources: [
        { label: "Bảo tàng Hồ Chí Minh · Bác Hồ đọc Tuyên ngôn Độc lập", url: "https://baotanghochiminh.vn/bac-ho-doc-tuye-n-ngo-n-do-c-la-p.htm" },
        { label: "Ban Quản lý Lăng · Lịch sử Quảng trường Ba Đình", url: "https://btllang.mod.gov.vn/tin-tuc/tin-tu-bo-tu-lenh-lang/10256-ban-quan-ly-quang-truong-ba-dinh-45-nam-xay-dung-va-phat-trien.html" }
      ],
      narration: "Ngày hai tháng chín năm một nghìn chín trăm bốn mươi lăm, tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập. Lăng Chủ tịch Hồ Chí Minh được khánh thành ngày hai mươi chín tháng tám năm một nghìn chín trăm bảy mươi lăm.",
      audioSrc: null,
      symbol: "02",
      visualLabel: "1945  →  1975",
      visualClass: "history-badinh"
    },
    VM01: {
      number: "03 / 03",
      place: "Văn Miếu – Quốc Tử Giám",
      title: "Dấu tích của việc học",
      lead: "Mô hình nhỏ gợi cho Hoa một câu hỏi về truyền thống học tập được lưu trong những tấm bia đá.",
      facts: [
        "Văn Miếu được dựng năm 1070.",
        "Bia Tiến sĩ được khởi dựng năm 1484."
      ],
      sources: [
        { label: "Trung tâm Hoạt động Văn hóa Khoa học Văn Miếu – Quốc Tử Giám · Lịch sử di tích", url: "https://vanmieu.gov.vn/vi/site-history" }
      ],
      narration: "Văn Miếu được dựng năm một nghìn không trăm bảy mươi. Bia Tiến sĩ được khởi dựng năm một nghìn bốn trăm tám mươi tư.",
      audioSrc: null,
      symbol: "✧",
      visualLabel: "1070  →  1484",
      visualClass: "history-vanmieu"
    }
  },
  pages: [
    {
      number: 1,
      chapter: "MỞ ĐẦU",
      title: "Một chiếc hộp trên đường",
      note: "Năm 2121, một điều bất ngờ chờ Hoa và Trung ngay trước buổi triển lãm.",
      panels: [
        { id: "P01A", size: "wide", scene: "street", image: null, visual: "Con đường Việt Nam năm 2121", artHint: "Đường phố tương lai · Hoa và Trung", sign: "TỰ HÀO VIỆT NAM", speaker: "Hoa", dialogue: "Hôm nay trường mở triển lãm gì nhỉ?" },
        { id: "P01B", size: "half", scene: "box", image: null, visual: "Hoa phát hiện chiếc hộp xanh", artHint: "Hoa nhặt một chiếc hộp nhỏ", speaker: "Hoa", dialogue: "Trung ơi, ai đánh rơi chiếc hộp này!" },
        { id: "P01C", size: "half", scene: "scan", image: null, visual: "Mây quét ba món đồ trong hộp", artHint: "Mây quét chiếc hộp · chưa đủ dữ kiện", speaker: "Mây", dialogue: "Tớ chưa đủ dữ kiện. Mình cùng tìm nhé?" }
      ]
    },
    {
      number: 2,
      chapter: "DẤU VẾT",
      title: "Ba món đồ lạ",
      note: "Trung giữ lời hứa tìm chủ, còn Mây bắt đầu tra cứu từng dấu vết.",
      panels: [
        { id: "P02A", size: "major", scene: "objects", image: null, visual: "Mảnh tranh, tấm ảnh hoặc thẻ Ba Đình, mô hình bia Tiến sĩ", artHint: "Mảnh tranh · Tấm ảnh · Mô hình bia", speaker: "Trung", dialogue: "Ba món đồ, chắc đều có người đang tìm." },
        { id: "P02B", size: "minor", scene: "report", image: null, visual: "Trung báo tin nhặt được hộp", artHint: "Trung gửi tin đến nơi nhận đồ thất lạc", speaker: "Trung", dialogue: "Tớ đã báo nơi nhận đồ thất lạc rồi." }
      ]
    },
    {
      number: 3,
      chapter: "ĐÔNG HỒ",
      title: "Màu kể chuyện",
      note: "Một mảnh giấy có thể dẫn đến cả một nghề thủ công.",
      panels: [
        { id: "P03A", size: "major", scene: "transit", image: null, visual: "Nhóm bạn đến không gian tìm hiểu tranh Đông Hồ trong năm 2121", artHint: "Chuyến đi tới Đông Hồ", speaker: "Mây", dialogue: "Dấu vết đầu tiên dẫn tới Đông Hồ." },
        { id: "P03B", size: "minor", scene: "dongho", image: null, visual: "Hoa quan sát mảnh tranh Đông Hồ", artHint: "Mảnh tranh · chạm để khám phá", speaker: "Hoa", dialogue: "Màu và mặt giấy cũng kể chuyện được!", historyId: "DH01", hotspot: { x: 28, y: 20, w: 51, h: 49 } }
      ]
    },
    {
      number: 4,
      chapter: "GHI NHỚ",
      title: "Một dữ kiện đã rõ",
      note: "Mây lưu lại điều có nguồn và tiếp tục tìm điều còn thiếu.",
      panels: [
        { id: "P04A", size: "half", scene: "archive", image: null, visual: "Hoa và Mây ghi lại nguồn tư liệu", artHint: "Ghi nguồn · kiểm tra lại", speaker: "Mây", dialogue: "Tớ ghi nguồn của điều mình vừa biết." },
        { id: "P04B", size: "half", scene: "photo", image: null, visual: "Trung cầm tấm ảnh hoặc thẻ Ba Đình", artHint: "Dấu vết tiếp theo: Ba Đình", speaker: "Trung", dialogue: "Món này đưa mình tới Ba Đình." }
      ]
    },
    {
      number: 5,
      chapter: "BA ĐÌNH",
      title: "Hai mốc thời gian",
      note: "Cùng một địa điểm có thể lưu giữ những câu chuyện ở các thời điểm khác nhau.",
      panels: [
        { id: "P05A", size: "major", scene: "plaza", image: null, visual: "Hoa, Trung và Mây ở khu vực Ba Đình tưởng tượng năm 2121", artHint: "Ba Đình trong bối cảnh viễn tưởng 2121", speaker: "Hoa", dialogue: "Một nơi có nhiều mốc thời gian." },
        { id: "P05B", size: "minor", scene: "timeline", image: null, visual: "Thẻ thời gian Ba Đình với hai mốc năm 1945 và 1975", artHint: "1945 · 1975 · chạm để xem", speaker: "Mây", dialogue: "Mình tách sự kiện năm 1945 và công trình năm 1975 nhé.", historyId: "BD01", hotspot: { x: 19, y: 20, w: 62, h: 49 } }
      ]
    },
    {
      number: 6,
      chapter: "CÂU HỎI MỚI",
      title: "Chủ nhân là ai?",
      note: "Biết về món đồ chưa đủ để biết người đã gìn giữ nó.",
      panels: [
        { id: "P06A", size: "half", scene: "photo", image: null, visual: "Hoa nhìn mặt sau vật phẩm Ba Đình", artHint: "Hoa kiểm tra dấu vết trên vật phẩm", speaker: "Hoa", dialogue: "Biết địa điểm rồi, mình vẫn chưa biết chủ hộp." },
        { id: "P06B", size: "half", scene: "stele", image: null, visual: "Mô hình bia Tiến sĩ phát sáng trong hộp", artHint: "Mô hình bia · điểm dừng kế tiếp", speaker: "Trung", dialogue: "Vậy theo dấu món cuối cùng!" }
      ]
    },
    {
      number: 7,
      chapter: "VĂN MIẾU",
      title: "Một câu chuyện về việc học",
      note: "Món đồ cuối cùng đưa cả nhóm tới những mốc thời gian khác.",
      panels: [
        { id: "P07A", size: "major", scene: "temple", image: null, visual: "Không gian học tập ở Văn Miếu tưởng tượng năm 2121", artHint: "Văn Miếu · góc nhìn viễn tưởng", speaker: "Mây", dialogue: "Thẻ này dẫn đến một câu chuyện về việc học." },
        { id: "P07B", size: "minor", scene: "vanmieu", image: null, visual: "Hoa nhìn mô hình bia Tiến sĩ", artHint: "Mô hình bia · chạm để khám phá", speaker: "Hoa", dialogue: "Nghề tranh, độc lập, việc học...", historyId: "VM01", hotspot: { x: 31, y: 17, w: 43, h: 54 } }
      ]
    },
    {
      number: 8,
      chapter: "TÌM THẤY",
      title: "Quay về điểm bắt đầu",
      note: "Ba vật phẩm cùng xuất hiện trong một mục lục triển lãm năm 2121.",
      panels: [
        { id: "P08A", size: "half", scene: "catalog", image: null, visual: "Mây nối ba vật phẩm với triển lãm của bác An", artHint: "Ba dấu vết gặp nhau", speaker: "Mây", dialogue: "Đã đủ dữ kiện. Người mang hộp tới triển lãm là bác An!" },
        { id: "P08B", size: "half", scene: "exhibition", image: null, visual: "Trung gặp bác An ở triển lãm", artHint: "Bác An tìm chiếc hộp", speaker: "Trung", dialogue: "Bác ơi, có phải bác đang tìm chiếc hộp này?" }
      ]
    },
    {
      number: 9,
      chapter: "NGÀY MAI",
      title: "Câu chuyện được trao tiếp",
      note: "Chiếc hộp trở lại, rồi bắt đầu một hành trình mới.",
      panels: [
        { id: "P09A", size: "wide", scene: "return", image: null, visual: "Trung trả hộp cho bác An", artHint: "Chiếc hộp trở về với bác An", speaker: "Bác An", dialogue: "Cảm ơn các cháu. Bác định mang nó tới lớp học." },
        { id: "P09B", size: "half", scene: "gift", image: null, visual: "Bác An tặng lại hộp đồ do mình sở hữu cho Hoa", artHint: "Bác An trao hộp cho Hoa", speaker: "Bác An", dialogue: "Bác tặng cháu hộp này. Hãy kể tiếp cho các bạn nhé." },
        { id: "P09C", size: "half", scene: "future", image: null, visual: "Hoa thêm một vật phẩm năm 2121 vào hộp", artHint: "Hoa để lại dấu vết của ngày mai", speaker: "Hoa", dialogue: "Đến lượt chúng mình để lại một điều đáng nhớ." }
      ]
    }
  ]
};
