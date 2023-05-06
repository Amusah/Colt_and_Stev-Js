class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    };

    start = () => {
        let  { tick, onStart} = this;
        if(onStart){
            onStart();
        }
        tick();
        this.intervalId = setInterval(tick, 1000);
    };

    pause = () => {
        clearInterval(this.intervalId);
    };

    tick = () => {
        if(this.timeRemaining <= 0){
            this.pause();
            if(this.onComplete){
                this.onComplete();
            }
        } else {
            // const timeRemaining = this.timeRemaining;
            // this.timeRemaining = timeRemaining - 1;
            // Refactor
            this.timeRemaining = this.timeRemaining - 1;
            if(this.onTick){
                this.onTick();
            }
        }
        
    };

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    };

    set timeRemaining(time){
        this.durationInput.value = time;
    }
}