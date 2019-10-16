function solution(s, k) {
    const smsToArray = s.split(" ")
    try {
        if (smsToArray == "" || smsToArray.length > 500 || k > 500) throw new Error("SMS length mismatch");
        smsToArray.forEach(element => {
            if (element.length > k) throw new Error("SMS word length mismatch");
        })
    } catch (error) {
        return -1
    }
    const reg = new RegExp(`\\b[^\\s].{1,${k}}(?![^\\s])`, 'g');
    return s.match(reg).length;
}

const k = 12;
const s = "SMS messages are really short";
const s1 = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Froddwr, atque. Qui odio ducimus suscipit iste atque, beatae vel! Velit quam odio minima dolorem deserunt illum perferendis impedit autem. Asperiores, eius?"
console.log("s =", s, '\n\nresult = ', solution(s, k));
console.log("\ns =", s1, '\n\nresult5 = ', solution(s1, 24));