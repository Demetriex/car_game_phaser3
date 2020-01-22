class ScoringSystem{
  constructor(scene){
    this.score = 0;
    this.per_completion_score = 10;
    this.multiplier = [1,2,4,8,16];
    this.multiplier_index = 0;
    this.timer = scene.time.addEvent({loop: true});
    this.time = 0.0;
    this.start_time = 0.0;
    this.score_start_time = 0.0;
    this.score_text = scene.add.text(
      0, 0, "Score:  " + this.score.toString(), textFormat
    );
    this.score_text.setDepth(1);
    this.multiplier_text = scene.add.text(
      500, 0, this.multiplier[0].toString() + "X", textFormat
    )
    this.multiplier_text.setDepth(1);
  }

  addScore(){
    this.score += this.per_completion_score * this.multiplier[this.multiplier_index]
  }

  update(cursors){
    this.multiplier_text.text = this.multiplier[this.multiplier_index].toString() + "X";
    this.score_text.text = "Score:  " + this.score.toString();
    this.time = this.timer.getElapsedSeconds();

    if (this.time - this.score_start_time >= 1){
      this.addScore();
      this.score_start_time = this.time;
    }

    if (cursors.up.isUp){
      this.start_time = this.time;
      this.multiplier_index = 0;
    }

    if(this.time - this.start_time >= 3){
      this.multiplier_index += 1;
      this.start_time = this.time;
      this.multiplier_index = Math.min(this.multiplier_index, this.multiplier.length-1)
    }

  }

}
