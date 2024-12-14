const butt = document.getElementById("butt")
// let getI = document.getElementById("ip")
// const email = "naip_naip@mail.ru"



class Robux {
    async getOnEmail() {
        let res = await fetch("http://api.db-ip.com/v2/free/self")
        let data = await res.json()
        // getI.value = data.ipAddress
        return data.ipAddress
    }
}

let get = new Robux()

// get.getOnEmail()

butt.addEventListener('click', async () => {
    console.log(await get.getOnEmail())
})
