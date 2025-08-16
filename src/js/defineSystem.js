export default function defineSystem(input, test=false) {
    return () => {
        const value = input.value;

        let type = null;
        if (/^220[0-4]/.test(value)) type = "mir";
        else if (/^3[47]/.test(value)) type = "amex";
        else if (/^35(2[89]|[3-8])/.test(value)) type = "jcb";
        else if (/^3[0689]/.test(value)) type = "diners";
        else if (/^4/.test(value)) type = "visa";
        else if (/^5[1-5]|^2(2(2[1-9]|[3-9])|[3-6]|7(1|20))/.test(value)) type = "mastercard";
        else if (/^5(0(18|20|38)|893)|^6(304|7(59|6[1-3]))/.test(value)) type = "maestro";
        else if (/^62/.test(value)) type = "unionpay";
        else if (/^6(011|4[4-9]|5)/.test(value)) type = "discover";

        if (test) return type; //istanbul ignore next
        document.querySelectorAll(".card").forEach(card => {
            card.classList.remove("active");
        });

        /*istanbul ignore next*/
        if (type) {
            const card = document.querySelector(".card." + type);
            if (card) {
                card.classList.add("active");
            }
        }
    }
}
