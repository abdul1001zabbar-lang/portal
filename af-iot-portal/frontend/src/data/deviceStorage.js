const defaultDevices = [
    {
        id: 1,
        name: "Sensor001",
        type: "Sensor",
        imei: "356789123456789",
        status: "Online",
        location: "Hyderabad"
    },
    {
        id: 2,
        name: "Camera001",
        type: "Camera",
        imei: "356789123456790",
        status: "Offline",
        location: "Mumbai"
    },
    {
        id: 3,
        name: "Gateway001",
        type: "Gateway",
        imei: "356789123456791",
        status: "Online",
        location: "Bangalore"
    }
];

export const getDevices = () => {

    const storedDevices =
        localStorage.getItem("devices");

    if (storedDevices) {
        return JSON.parse(storedDevices);
    }

    localStorage.setItem(
        "devices",
        JSON.stringify(defaultDevices)
    );

    return defaultDevices;
};

export const saveDevices = (devices) => {

    localStorage.setItem(
        "devices",
        JSON.stringify(devices)
    );
};

export const clearDevices = () => {

    localStorage.removeItem("devices");
};