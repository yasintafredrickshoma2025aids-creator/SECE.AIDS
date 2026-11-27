
function getIUser() {
    return new Promise((resolve, reject) => {
        const user = {
            id: 1,
            name: "Yasinta",
            email: "yasinta@example.com"
        };

        if (user) {
            resolve(user);
        } else {
            reject("User not found");
        }
    });
}

getIUser()
    .then((user) => {
        console.log("User Data:", user);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
