const button = document.querySelector(".notificationButton");

button.addEventListener("click", async()=>{
    const permission = await Notification.requestPermission();
    console.log(permission);

    if (permission == "granted") {
        const notification = new Notification("Hello", {
            body: "This is a notification",
            icon: "https://gitee.com/jo-cruise/jos-avatar/raw/master/d35d2183941dcb96c05708a4920eb64b.png",
            requireInteraction: true
        });

        notification.onclick = () => {
            window.open("https://www.google.com");
        }
    }
});

document.addEventListener("visibilitychange", ()=>{
    if (document.visibilitychange === "hidden") {
        new Notification("Go Back!")
    }
})