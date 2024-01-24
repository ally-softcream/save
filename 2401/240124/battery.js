navigator.getBattery().then(function(battery)
{
    updateBatteryStatus(battery);
    battery.addEventListener('levelchange',function(){
        updateBatteryStatus(battery);
    });
    battery.addEventListener('chargingchange', function(){
        updateBatteryStatus(battery);
    });
});

function updateBatteryStatus(battery) {
    let batteryFill = document.querySelector(".battery-fill");
    let batteryPercentage = document.querySelector(".battery-percentage");
    let batteryStatusText = document.querySelector(".battery-status-text");

    let fillWidth = Math.round(battery.level * l00) + "%";
    batteryFill.style.width = fillWidth;
    batteryPercentage.innerHTML = fillWidth;

    if (battery.charging) {
        batteryStatusText.innerHTML = "현재 충전중입니다.";
    } else {
        batteryStatusText.innerHTML = "현재 충전중 상태가 아닙니다.";
    }

}