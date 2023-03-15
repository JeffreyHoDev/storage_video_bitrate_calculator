const rate = {
    QCIF:["512","448","416","384","352","320","288","256"],
    CIF:["1024","768","640","512","440","350","312","280"],
    HD1:["1536","1280","1024","768","640","560","500","450"],
    D1:["2048","1536","1280","1024","900","800","720","640"],
    WCIF:["1024*1.3","768*1.3","640*1.3","512*1.3","440*1.3","350*1.3","312*1.3","280*1.3"],
    WHD1:["1536*1.3","1280*1.3","1024*1.3","768*1.3","640*1.3","560*1.3","500*1.3","450*1.3"],
    WD1:["2048*1.3","1536*1.3","1280*1.3","1024*1.3","900*1.3","800*1.3","720*1.3","640*1.3"],
    P720:["6144","4800","4128","3456","2784","2112","1440","768"],
    P960: ["7987.2", "6240", "5366.4", "4492.8", "3619.2", "2745.6", "1872", "998.4"],
    P1080:["8192","6390","5505","4068","3712","2816","1919","1024"]
}

export const sizeCalculator = (rows) => {
    let { mode, duration, frame, quality, resolution } = rows

    let resolutionForCalc = rate[resolution][quality-1]

    let indexOfRes = resolutionForCalc.indexOf("*")
    if(indexOfRes > 0) resolutionForCalc = resolutionForCalc.substr(0, indexOfRes) * resolutionForCalc.substr(indexOfRes + 1)

    let arg=1;
    if(mode === "PAL"){
        if(frame>= 1 && frame <= 5)arg=1.4;
        else if(frame>=6&&frame<=11)arg=1.3;
        else if(frame>=12&&frame<=17)arg=1.2;
        else if(frame>=18&&frame<=22)arg=1.1;
    }else if(mode === "NTSC"){
        if(frame>= 1 && frame <= 6)arg=1.4;
        else if(frame>=7&&frame<=14)arg=1.3;
        else if(frame>=15&&frame<=21)arg=1.2;
        else if(frame>=22&&frame<=27)arg=1.1;
    };

    let result = resolutionForCalc * frame * arg * parseInt(duration) * 3600 / 25
    return formatSize(result*1.2)

}

export const sizeCalculatorWithoutFormat = (rows) => {
    let { mode, duration, frame, quality, resolution } = rows

    let resolutionForCalc = rate[resolution][quality-1]

    let indexOfRes = resolutionForCalc.indexOf("*")
    if(indexOfRes > 0) resolutionForCalc = resolutionForCalc.substr(0, indexOfRes) * resolutionForCalc.substr(indexOfRes + 1)

    let arg=1;
    if(mode === "PAL"){
        if(frame>= 1 && frame <= 5)arg=1.4;
        else if(frame>=6&&frame<=11)arg=1.3;
        else if(frame>=12&&frame<=17)arg=1.2;
        else if(frame>=18&&frame<=22)arg=1.1;
    }else if(mode === "NTSC"){
        if(frame>= 1 && frame <= 6)arg=1.4;
        else if(frame>=7&&frame<=14)arg=1.3;
        else if(frame>=15&&frame<=21)arg=1.2;
        else if(frame>=22&&frame<=27)arg=1.1;
    };

    let result = resolutionForCalc * frame * arg * parseInt(duration) * 3600 / 25
    return result*1.2
}

export const formatSize = (value) => {
    if(value/8>1024*1024)value=Math.round(value*100/8/1024/1024)/100+" GB";
    else if(value/8>1024)value=Math.round(value*100/8/1024)/100+" MB";
    else value=Math.round(value*100/8)/100+" KB";
    return value
}

export const totalSizeCalculator = (channelList) => {
    let result = channelList.reduce((acc, item) => {
        return acc += sizeCalculatorWithoutFormat(item)
    }, 0)
    let formattedResult = formatSize(result)
    return formattedResult
}