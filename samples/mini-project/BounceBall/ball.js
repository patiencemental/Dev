export class Ball {
  constructor(stageWidth, stageHeight, radius, speed) {
    // 반지름 및 속도(+방향) 초기화
    this.radius = radius;
    this.vx = speed;
    this.vy = speed;

    // Ball 생성 위치 초기화
    const diameter = this.radius * 2; // 지름
    this.x = diameter + (Math.random() * stageWidth - diameter);
    this.y = diameter + (Math.random() * stageHeight - diameter);
  }

  draw(ctx, stageWidth, stageHeight) {
    // 좌표 이동
    this.x += this.vx;
    this.y += this.vy;

    // 충돌 체크 및 충돌 시 방향 재설정
    this.bounceWindow(stageWidth, stageHeight);

    ctx.fillStyle = '#fdd700';
    ctx.beginPath(); // 새로운 path 생성 (존재하던 기존 path 제거, 작업을 하기 위해 필수 사항은 아니지만 이전 path가 남아 있을 수 있기 때문에 필수!!)
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  bounceWindow(stageWidth, stageHeight) {
    const minX = this.radius;
    const maxX = stageWidth - this.radius;
    const minY = this.radius;
    const maxY = stageHeight - this.radius;

    if (this.x <= minX || this.x >= maxX) {
      this.vx *= -1;
      this.x += this.vx;
    } else if (this.y <= minY || this.y >= maxY) {
      this.vy *= -1;
      this.y += this.vy;
    }
  }
}