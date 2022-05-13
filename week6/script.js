function countDown() {
    let i = 3;
    let interval = setInterval(() => {
        console.log("i:", i)
        i -= 1
        if (i === 0) {
            clearInterval(interval)
            setTimeout(() => {
                console.log("0!")
                console.log(interval)

            }, 1000);

        }
    }, 1000);

}
countDown()