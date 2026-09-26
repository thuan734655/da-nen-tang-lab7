class StoryBrain {
  constructor() {
    this.storyIndex = 0;
    
    // Mảng chứa toàn bộ dữ liệu cốt truyện
    this.storyData = [
      { // 0: Khởi đầu
        storyTitle: 'Xe của bạn bị nổ lốp trên một con đường đèo vắng vẻ lúc nửa đêm. Xung quanh không có sóng điện thoại. Bỗng một chiếc xe tải cũ kỹ dừng lại, người tài xế với ánh mắt vô hồn mở cửa và hỏi: "Có cần đi nhờ không nhóc?".',
        choice1: 'Tuyệt quá, tôi lên xe luôn. Cảm ơn chú!',
        choice2: 'Phải hỏi thẳng xem ông ta có phải kẻ giết người không đã.',
      },
      { // 1: Rẽ nhánh từ lựa chọn 2 của câu 0
        storyTitle: 'Ông ta chậm rãi gật đầu, khuôn mặt không hề nao núng trước câu hỏi kỳ cục của bạn.',
        choice1: 'Ít ra ổng cũng thật thà. Lên xe thôi.',
        choice2: 'Thôi ghê quá, tôi biết tự thay lốp xe rồi, khỏi cần.',
      },
      { // 2: Rẽ nhánh từ việc lên xe (từ 0 hoặc 1)
        storyTitle: 'Khi xe bắt đầu chạy, ông ta lầm bầm những điều kỳ lạ. Bạn lén mở hộp đựng găng tay và thấy một con dao dính máu cùng một đĩa nhạc của Elton John. Ông ta đột nhiên vươn tay về phía chiếc hộp!',
        choice1: 'Tôi rất thích nhạc Elton John! Đưa đĩa nhạc cho ổng.',
        choice2: 'Một mất một còn! Giật lấy con dao và đâm ổng.',
      },
      { // 3: Kết thúc 1
        storyTitle: 'Bạn ngớ ngẩn thật. Đã từ chối đi nhờ sao không đi bộ mà lại ở lại sửa xe giữa đêm khuya? Cuối cùng bạn bị sói ăn thịt.',
        choice1: 'Chơi lại',
        choice2: '',
      },
      { // 4: Kết thúc 2
        storyTitle: 'Xe mất lái đâm vào lan can và lao xuống vực. Lần sau hãy nhớ: Đừng bao giờ đâm tài xế khi bạn đang ngồi trên xe của họ.',
        choice1: 'Chơi lại',
        choice2: '',
      },
      { // 5: Kết thúc 3 (Happy Ending)
        storyTitle: 'Bạn và kẻ sát nhân hát vang bài "Can You Feel The Love Tonight". Hắn thả bạn ở thị trấn tiếp theo và hỏi bạn có biết chỗ nào phi tang thi thể tốt không. Bạn đáp: "Thử ra bến tàu xem sao".',
        choice1: 'Chơi lại',
        choice2: '',
      }
    ];
  }

  getStory() { return this.storyData[this.storyIndex].storyTitle; }
  getChoice1() { return this.storyData[this.storyIndex].choice1; }
  getChoice2() { return this.storyData[this.storyIndex].choice2; }

  // Logic chuyển hướng cốt truyện (Quyết định xem sẽ nhảy tới Index số mấy)
  nextStory(choiceNumber) {
    if (this.storyIndex === 0 && choiceNumber === 1) {
      this.storyIndex = 2; // Chọn 1 ở câu 0 -> Tới câu 2
    } else if (this.storyIndex === 0 && choiceNumber === 2) {
      this.storyIndex = 1; // Chọn 2 ở câu 0 -> Tới câu 1
    } else if (this.storyIndex === 1 && choiceNumber === 1) {
      this.storyIndex = 2; 
    } else if (this.storyIndex === 1 && choiceNumber === 2) {
      this.storyIndex = 3; 
    } else if (this.storyIndex === 2 && choiceNumber === 1) {
      this.storyIndex = 5; 
    } else if (this.storyIndex === 2 && choiceNumber === 2) {
      this.storyIndex = 4; 
    } else if (this.storyIndex >= 3) {
      // Nếu đang ở các câu kết thúc (3,4,5) thì bấm nút nào cũng reset game
      this.restart();
    }
  }

  restart() {
    this.storyIndex = 0;
  }
}

export default new StoryBrain();
