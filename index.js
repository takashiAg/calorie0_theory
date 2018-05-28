class Food {
    constructor(calorie) {
        this.Calorie_raw = calorie;
        this.calc_calorie()
    }

    get calorie() {
        return [this.calc_calorie(), this.reason];
    }

    get Is_hot() {
        if (this.Temperature && this.Temperature > 100) {
            return true;
        }
    }

    get Is_cold() {
        if (this.Temperature && this.Temperature < 0) {
            return true;
        }
    }

    get Is_smashed() {
        if (this.Smashed) {
            return this.Smashed;
        }
        return false
    }

    get Is_white() {
        if (this.Color && this.Color == "white") {
            return true
        }
        return false
    }

    calc_calorie() {
        if (this.hole) {
            this.reason = "ドーナツは真ん中が 空洞だし、形がカロリーゼロを表してるから太らない"
            return 0
        }
        if (this.Is_hot) {
            this.reason = "カロリーは110℃に耐えられないからゼロカロリー"
            return 0
        }
        if (this.Is_cold) {
            this.reason = "アイスはカロリーごと凍らしてるからカロリーゼロ。アイスは冷たいからカロリーゼロ"
            return 0
        }
        if (this.Is_white) {
            this.reason = "白いものは白紙に戻ってカロリーゼロ"
            return 0
        }
        if (this.Ingredients && Array.isArray(this.Ingredients) && this.Ingredients.length >= 2) {
            this.reason = "高いカロリーのものは互いに打ち消しあう"
            return 0
        }
        if (this.Is_smashed) {
            this.reason = "小さくすればカロリーなんてあるわけない"
            return 0
        }
        return this.Calorie_raw
    }

}

class Donut extends Food {
    constructor(calorie) {
        super(calorie)
        this.hole = true;
    }

}

class Ramen extends Food {
    constructor(calorie, ingredients) {
        super(calorie);
        this.Ingredients = ingredients;
    }
}

class Castela extends Food {
    constructor(calorie, Smashed) {
        super(calorie);
        this.Smashed = Smashed;
    }
}
