export default function validate(input, output, test=false) {
    return (e) => {
        if (!test) e.preventDefault();
        const value = input.value;
        const len = value.length;
        let x = 0;
        for (let i=0; i<len; i++) {
            let a = + value[len-1-i];
            if (i%2) {
                a *= 2;
                if (a>9) {
                    a -= 9;
                }
            }
            x += a;
        }
        if (test) return !(x%10); //istanbul ignore next
        if (x%10) {
            output.textContent = "Luhn Algorithm: Card number isn't valid";
            output.style = "color: #f00";
        } else {
            output.textContent = "Luhn Algorithm: Card number is valid";
            output.style = "color: #0f0";
        }
    }
}