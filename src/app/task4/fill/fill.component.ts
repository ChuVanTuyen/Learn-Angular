import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fill',
  templateUrl: './fill.component.html',
  styleUrls: ['./fill.component.scss']
})
export class FillComponent implements OnChanges {

  /* 
  -Tạo wordStore: mảng lưu trữ [[],[],[],[],[],[],[]] mỗi mảng con lưu trữ character tiếng Nhật
  -lấy 1 mảng con của wordStore ẩn đi ngẫu nhiên các ký tự thay bằng '_' và lưu vào arrQuestion
  -các vị trí ký tự bị ẩn được lưu vào mảng hCpositionArr

  */

  @Input() category: any;// lấy dữ liệu từ component cha {name: 'folder', items: []}
  @Output() checkCloseFill = new EventEmitter();// gửi event close fill
  @ViewChild("timeBar") timeBar!: ElementRef;// thanh % thời gian
  @ViewChild("ngModalResult") modalResult!: ElementRef; // modal thông báo kết quả 
  time = 35;// thời gian cho từng câu hỏi
  wordStore: any; // danh sách các mảng câu trả lời đúng
  arrAnswer: any; // mảng lưu các câu trả lời, render các button từ để chọn
  arrQuestion: any; // mảng lưu câu hỏi render ra view VD: な_な___い
  hCpositionArr: any; // mảng lưu các vị trí ký tự bị ẩn
  hCposition = 0;// index vị trí ký tự bị ẩn
  clearTimeDown: any;
  qCount = 0; // câu hỏi đầu tiên


  closeFill(): void {
    this.checkCloseFill.emit();
  }


  // tạo mảng question VD: [な, い, な, い, い, い,い]
  createArrQuestion(arrQuestion: string[]): void {
    let qtLength = arrQuestion.length;
    let numMin = Math.floor(qtLength / 2); // ẩn ít nhất 1 nửa số ký tự
    let num = numMin + Math.floor(Math.random() * (qtLength - numMin));
    let arr: number[] = [];
    let i = 0;
    do {
      let n = Math.floor(Math.random() * qtLength);
      if (!arr.includes(n)) {
        arr.push(n);
        i++;
      }
    } while (i < num);// arr = [3,1,5,4]
    arr.map((n: number) => arrQuestion[n] = '_'); //[な, _, な,_, _, _,い]
    this.hCpositionArr = arr.sort(); // [1,3,4,5]
  }

  // hàm sử lý từng câu hỏi liên tục
  nextQuestion(qtCount: number, questionNum: number): void {
    this.arrQuestion = [...this.wordStore[qtCount]];
    this.createArrQuestion(this.arrQuestion);

    // tạo các ký tự đáp án lưu vào mảng arrAnswer
    if (qtCount < questionNum - 3) {
      this.arrAnswer = [...this.wordStore[qtCount], ...this.wordStore[qtCount + 1], ...this.wordStore[qtCount + 2]];
    } else {
      this.arrAnswer = [...this.wordStore[qtCount], ...this.wordStore[0], ...this.wordStore[1]];
    }
    this.arrAnswer = this.arrAnswer.filter((item: string, index: number) => this.arrAnswer.indexOf(item) === index);
    //-------------------------------------

  }

  timeDown(): void {// đếm ngược thời gian cho từ câu hỏi
    this.clearTimeDown = setInterval(() => {
      this.time--;
      if (this.time <= 0) {
        clearInterval(this.clearTimeDown);
        this.time = 35;
        this.modalResult.nativeElement.classList.add("show");
        this.timeBar.nativeElement.classList.remove("animation");
      }
    }, 1000);
  }

  startNewGame(): void { // bắt đầu 
    this.category.sort(() => 0.5 - Math.random());// xáo trộn lại thứ tự câu hỏi
    this.wordStore = this.category.map((item: any) => { // wordStore = [[],[], ..., []]
      return item.name.split("");
    });
    let questionNum = this.wordStore.length;
    this.nextQuestion(0, questionNum);
    this.timeDown();
  }

  ngOnChanges(): void {
    if (this.category) {
      this.startNewGame();
    }
  }

  onClickAnswer(character: string): void {
    let length = this.hCpositionArr.length;

    // kiểm tra ký tự đúng lần lượt từ trái qua phải
    if (this.wordStore[this.qCount][this.hCpositionArr[this.hCposition]] === character) {
      this.arrQuestion[this.hCpositionArr[this.hCposition]] = character;
      this.hCposition++;
    }
    if (this.hCposition > length - 1) {// nếu đã chọn được hết thì tiếp tục câu tiếp theo
      clearInterval(this.clearTimeDown);
      this.hCposition = 0;
      setTimeout(() => { // dừng màn hình hiện thị mỗi khi trả lời đúng sau mỗi câu
        this.qCount++;
        if (this.qCount >= this.category.length) { // nếu đã hết câu hỏi thì hiển thị kết quả
          this.time = 35;
          this.modalResult.nativeElement.classList.add("show");
          this.timeBar.nativeElement.classList.remove("animation");
          return;
        }
        this.timeBar.nativeElement.classList.remove("animation");
        this.nextQuestion(this.qCount, this.wordStore.length);
        this.time = 35;
        this.timeDown();
        setTimeout(() => {
          this.timeBar.nativeElement.classList.add("animation");
        }, 50);
      }, 2000);
    }
  }

  playAgain(): void {
    this.qCount = 0;
    this.hCposition = 0;
    this.modalResult.nativeElement.classList.remove("show");
    this.timeBar.nativeElement.classList.add("animation");
    this.nextQuestion(0, this.wordStore.length);
    this.timeDown();
  }

  playContinue(): void {
    this.qCount = 0;
    this.hCposition = 0;
    this.modalResult.nativeElement.classList.remove("show");
    this.timeBar.nativeElement.classList.add("animation");
    this.startNewGame();
  }


}

