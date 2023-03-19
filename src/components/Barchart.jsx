import React, { useState } from "react";

const data = [
    {
        id: 1,
        name: "พระนคร",
        dcode: "1001",
        yearData: [
            { year: "2550", per: "-2.25" },
            { year: "2551", per: "-2.16" },
            { year: "2552", per: "-2.53" },
            { year: "2553", per: "-1.73" },
            { year: "2554", per: "-2.56" },
            { year: "2555", per: "-1.60" },
            { year: "2556", per: "-1.98" },
            { year: "2557", per: "-2.31" },
            { year: "2558", per: "-2.13" },
            { year: "2559", per: "-3.09" }
        ]
    },
    {
        yearData: [
            { year: "2550", per: "-1.72" },
            { year: "2551", per: "-0.95" },
            { year: "2552", per: "-1.93" },
            { year: "2553", per: "-2.61" },
            { year: "2554", per: "-2.40" },
            { year: "2555", per: "-0.78" },
            { year: "2556", per: "-1.07" },
            { year: "2557", per: "-2.26" },
            { year: "2558", per: "-1.12" },
            { year: "2559", per: "-4.63" }
        ],
        id: 2,
        name: "ป้อมปราบศัตรูพ่าย",
        dcode: "1002"
    },
    {
        yearData: [
            { year: "2550", per: "3.94" },
            { year: "2551", per: "3.61" },
            { year: "2552", per: "2.78" },
            { year: "2553", per: "2.45" },
            { year: "2554", per: "2.04" },
            { year: "2555", per: "1.85" },
            { year: "2556", per: "1.74" },
            { year: "2557", per: "1.65" },
            { year: "2558", per: "1.17" },
            { year: "2559", per: "2.04" }
        ],
        id: 3,
        name: "สัมพันธวงศ์",
        dcode: "1003"
    },
    {
        yearData: [
            { year: "2550", per: "-1.22" },
            { year: "2551", per: "-1.26" },
            { year: "2552", per: "-2.07" },
            { year: "2553", per: "-0.95" },
            { year: "2554", per: "-2.05" },
            { year: "2555", per: "0.05" },
            { year: "2556", per: "0.00" },
            { year: "2557", per: "0.78" },
            { year: "2558", per: "0.29" },
            { year: "2559", per: "1.51" }
        ],
        id: 4,
        name: "ปทุมวัน",
        dcode: "1004"
    },
    {
        yearData: [
            { year: "2550", per: "0.52" },
            { year: "2551", per: "0.82" },
            { year: "2552", per: "1.12" },
            { year: "2553", per: "1.22" },
            { year: "2554", per: "0.05" },
            { year: "2555", per: "0.79" },
            { year: "2556", per: "0.43" },
            { year: "2557", per: "0.06" },
            { year: "2558", per: "-0.07" },
            { year: "2559", per: "0.16" }
        ],
        id: 5,
        name: "บางรัก",
        dcode: "1005"
    },
    {
        yearData: [
            { year: "2550", per: "0.19" },
            { year: "2551", per: "0.10" },
            { year: "2552", per: "-0.08" },
            { year: "2553", per: "-0.37" },
            { year: "2554", per: "-0.64" },
            { year: "2555", per: "-0.10" },
            { year: "2556", per: "2.78" },
            { year: "2557", per: "-0.69" },
            { year: "2558", per: "-1.64" },
            { year: "2559", per: "-0.45" }
        ],
        id: 6,
        name: "ยานนาวา",
        dcode: "1006"
    },
    {
        yearData: [
            { year: "2550", per: "-1.71" },
            { year: "2551", per: "-1.25" },
            { year: "2552", per: "-2.35" },
            { year: "2553", per: "-2.53" },
            { year: "2554", per: "-4.13" },
            { year: "2555", per: "-1.97" },
            { year: "2556", per: "-7.09" },
            { year: "2557", per: "-1.62" },
            { year: "2558", per: "3.19" },
            { year: "2559", per: "-2.47" }
        ],
        id: 7,
        name: "สาธร",
        dcode: "1007"
    },
    {
        yearData: [
            { year: "2550", per: "-2.22" },
            { year: "2551", per: "-1.74" },
            { year: "2552", per: "-3.30" },
            { year: "2553", per: "-1.97" },
            { year: "2554", per: "-2.68" },
            { year: "2555", per: "-2.23" },
            { year: "2556", per: "-3.68" },
            { year: "2557", per: "-0.19" },
            { year: "2558", per: "-0.71" },
            { year: "2559", per: "-2.40" }
        ],
        id: 8,
        name: "บางคอแหลม",
        dcode: "1008"
    },
    {
        yearData: [
            { year: "2550", per: "0.41" },
            { year: "2551", per: "-0.71" },
            { year: "2552", per: "-0.93" },
            { year: "2553", per: "-1.26" },
            { year: "2554", per: "-1.23" },
            { year: "2555", per: "-1.08" },
            { year: "2556", per: "-0.74" },
            { year: "2557", per: "-0.35" },
            { year: "2558", per: "-0.26" },
            { year: "2559", per: "-0.98" }
        ],
        id: 9,
        name: "ดุสิต",
        dcode: "1009"
    },
    {
        yearData: [
            { year: "2550", per: "3.99" },
            { year: "2551", per: "2.59" },
            { year: "2552", per: "1.61" },
            { year: "2553", per: "1.41" },
            { year: "2554", per: "0.89" },
            { year: "2555", per: "0.78" },
            { year: "2556", per: "0.99" },
            { year: "2557", per: "0.80" },
            { year: "2558", per: "0.40" },
            { year: "2559", per: "0.63" }
        ],
        id: 10,
        name: "บางซื่อ",
        dcode: "1010"
    },
    {
        yearData: [
            { year: "2550", per: "1.64" },
            { year: "2551", per: "1.85" },
            { year: "2552", per: "3.42" },
            { year: "2553", per: "3.24" },
            { year: "2554", per: "2.14" },
            { year: "2555", per: "1.53" },
            { year: "2556", per: "1.47" },
            { year: "2557", per: "1.56" },
            { year: "2558", per: "0.72" },
            { year: "2559", per: "1.43" }
        ],
        id: 11,
        name: "พญาไท",
        dcode: "1011"
    },
    {
        yearData: [
            { year: "2550", per: "-0.36" },
            { year: "2551", per: "-0.77" },
            { year: "2552", per: "-1.83" },
            { year: "2553", per: "-1.75" },
            { year: "2554", per: "-2.14" },
            { year: "2555", per: "-1.15" },
            { year: "2556", per: "-0.45" },
            { year: "2557", per: "-0.39" },
            { year: "2558", per: "-0.57" },
            { year: "2559", per: "-1.00" }
        ],
        id: 12,
        name: "ราชเทวี",
        dcode: "1012"
    },
    {
        yearData: [
            { year: "2550", per: "-1.59" },
            { year: "2551", per: "-1.82" },
            { year: "2552", per: "-2.68" },
            { year: "2553", per: "-2.27" },
            { year: "2554", per: "-2.15" },
            { year: "2555", per: "-2.05" },
            { year: "2556", per: "-1.80" },
            { year: "2557", per: "-2.13" },
            { year: "2558", per: "-1.88" },
            { year: "2559", per: "-4.17" }
        ],
        id: 13,
        name: "ห้วยขวาง",
        dcode: "1013"
    },
    {
        yearData: [
            { year: "2550", per: "-0.18" },
            { year: "2551", per: "-0.94" },
            { year: "2552", per: "-1.29" },
            { year: "2553", per: "-1.06" },
            { year: "2554", per: "-1.55" },
            { year: "2555", per: "-0.61" },
            { year: "2556", per: "-0.81" },
            { year: "2557", per: "-0.40" },
            { year: "2558", per: "0.11" },
            { year: "2559", per: "-0.25" }
        ],
        id: 14,
        name: "ดินแดง",
        dcode: "1014"
    },
    {
        yearData: [
            { year: "2550", per: "-1.90" },
            { year: "2551", per: "-1.80" },
            { year: "2552", per: "-2.14" },
            { year: "2553", per: "-1.88" },
            { year: "2554", per: "-2.38" },
            { year: "2555", per: "-1.56" },
            { year: "2556", per: "-1.76" },
            { year: "2557", per: "-1.88" },
            { year: "2558", per: "-1.48" },
            { year: "2559", per: "-2.28" }
        ],
        id: 15,
        name: "พระโขนง",
        dcode: "1015"
    },
    {
        yearData: [
            { year: "2550", per: "-1.52" },
            { year: "2551", per: "-1.67" },
            { year: "2552", per: "-2.17" },
            { year: "2553", per: "-1.29" },
            { year: "2554", per: "-2.32" },
            { year: "2555", per: "-2.20" },
            { year: "2556", per: "-1.60" },
            { year: "2557", per: "-1.52" },
            { year: "2558", per: "-0.66" },
            { year: "2559", per: "-2.38" }
        ],
        id: 16,
        name: "คลองเตย",
        dcode: "1016"
    },
    {
        yearData: [
            { year: "2550", per: "0.83" },
            { year: "2551", per: "-0.11" },
            { year: "2552", per: "0.05" },
            { year: "2553", per: "0.40" },
            { year: "2554", per: "0.55" },
            { year: "2555", per: "0.63" },
            { year: "2556", per: "0.94" },
            { year: "2557", per: "1.34" },
            { year: "2558", per: "0.68" },
            { year: "2559", per: "0.80" }
        ],
        id: 17,
        name: "ประเวศ",
        dcode: "1017"
    },
    {
        yearData: [
            { year: "2550", per: "-1.56" },
            { year: "2551", per: "-2.35" },
            { year: "2552", per: "-2.33" },
            { year: "2553", per: "-1.67" },
            { year: "2554", per: "-2.61" },
            { year: "2555", per: "-1.44" },
            { year: "2556", per: "-0.77" },
            { year: "2557", per: "-0.71" },
            { year: "2558", per: "-0.52" },
            { year: "2559", per: "-1.29" }
        ],
        id: 18,
        name: "สวนหลวง",
        dcode: "1018"
    },
    {
        yearData: [
            { year: "2550", per: "0.94" },
            { year: "2551", per: "-0.28" },
            { year: "2552", per: "-0.51" },
            { year: "2553", per: "-0.20" },
            { year: "2554", per: "0.03" },
            { year: "2555", per: "-0.24" },
            { year: "2556", per: "-0.32" },
            { year: "2557", per: "-0.32" },
            { year: "2558", per: "-0.26" },
            { year: "2559", per: "-0.28" }
        ],
        id: 19,
        name: "บางเขน",
        dcode: "1019"
    },
    {
        yearData: [
            { year: "2550", per: "-1.40" },
            { year: "2551", per: "-0.87" },
            { year: "2552", per: "-1.99" },
            { year: "2553", per: "-1.95" },
            { year: "2554", per: "-3.47" },
            { year: "2555", per: "-1.73" },
            { year: "2556", per: "-0.38" },
            { year: "2557", per: "-0.72" },
            { year: "2558", per: "-1.01" },
            { year: "2559", per: "-2.51" }
        ],
        id: 20,
        name: "ดอนเมือง",
        dcode: "1020"
    },
    {
        yearData: [
            { year: "2550", per: "2.73" },
            { year: "2551", per: "2.54" },
            { year: "2552", per: "3.58" },
            { year: "2553", per: "3.54" },
            { year: "2554", per: "3.74" },
            { year: "2555", per: "2.51" },
            { year: "2556", per: "2.37" },
            { year: "2557", per: "2.08" },
            { year: "2558", per: "1.55" },
            { year: "2559", per: "2.24" }
        ],
        id: 21,
        name: "จตุจักร",
        dcode: "1021"
    },
    {
        yearData: [
            { year: "2550", per: "-0.55" },
            { year: "2551", per: "-0.58" },
            { year: "2552", per: "-0.71" },
            { year: "2553", per: "-0.99" },
            { year: "2554", per: "-0.66" },
            { year: "2555", per: "-0.53" },
            { year: "2556", per: "-0.19" },
            { year: "2557", per: "-0.25" },
            { year: "2558", per: "-0.51" },
            { year: "2559", per: "-0.78" }
        ],
        id: 22,
        name: "บางกะปิ",
        dcode: "1022"
    },
    {
        yearData: [
            { year: "2550", per: "3.21" },
            { year: "2551", per: "2.97" },
            { year: "2552", per: "2.28" },
            { year: "2553", per: "1.81" },
            { year: "2554", per: "2.02" },
            { year: "2555", per: "1.34" },
            { year: "2556", per: "1.06" },
            { year: "2557", per: "0.85" },
            { year: "2558", per: "0.55" },
            { year: "2559", per: "0.79" }
        ],
        id: 23,
        name: "ลาดพร้าว",
        dcode: "1023"
    },
    {
        yearData: [
            { year: "2550", per: "-0.66" },
            { year: "2551", per: "-0.90" },
            { year: "2552", per: "-1.67" },
            { year: "2553", per: "-1.39" },
            { year: "2554", per: "-1.63" },
            { year: "2555", per: "-1.36" },
            { year: "2556", per: "-0.94" },
            { year: "2557", per: "-1.10" },
            { year: "2558", per: "-0.74" },
            { year: "2559", per: "-1.20" }
        ],
        id: 24,
        name: "บึงกุ่ม",
        dcode: "1024"
    },
    {
        yearData: [
            { year: "2550", per: "-1.67" },
            { year: "2551", per: "-1.42" },
            { year: "2552", per: "-1.48" },
            { year: "2553", per: "-1.02" },
            { year: "2554", per: "-0.94" },
            { year: "2555", per: "-1.16" },
            { year: "2556", per: "-1.05" },
            { year: "2557", per: "-1.35" },
            { year: "2558", per: "-0.99" },
            { year: "2559", per: "-2.15" }
        ],
        id: 25,
        name: "หนองจอก",
        dcode: "1025"
    },
    {
        yearData: [
            { year: "2550", per: "-1.87" },
            { year: "2551", per: "-1.72" },
            { year: "2552", per: "-1.88" },
            { year: "2553", per: "-1.62" },
            { year: "2554", per: "-1.96" },
            { year: "2555", per: "-1.25" },
            { year: "2556", per: "-1.05" },
            { year: "2557", per: "-1.22" },
            { year: "2558", per: "-0.84" },
            { year: "2559", per: "-1.76" }
        ],
        id: 26,
        name: "มีนบุรี",
        dcode: "1026"
    },
    {
        yearData: [
            { year: "2550", per: "3.27" },
            { year: "2551", per: "1.58" },
            { year: "2552", per: "0.17" },
            { year: "2553", per: "-0.46" },
            { year: "2554", per: "-0.57" },
            { year: "2555", per: "-0.27" },
            { year: "2556", per: "0.02" },
            { year: "2557", per: "-0.21" },
            { year: "2558", per: "-0.39" },
            { year: "2559", per: "-0.35" }
        ],
        id: 27,
        name: "ลาดกระบัง",
        dcode: "1027"
    },
    {
        yearData: [
            { year: "2550", per: "-1.90" },
            { year: "2551", per: "-1.18" },
            { year: "2552", per: "-1.81" },
            { year: "2553", per: "-1.25" },
            { year: "2554", per: "-2.23" },
            { year: "2555", per: "-1.35" },
            { year: "2556", per: "-1.35" },
            { year: "2557", per: "-1.75" },
            { year: "2558", per: "-0.67" },
            { year: "2559", per: "-1.69" }
        ],
        id: 28,
        name: "ธนบุรี",
        dcode: "1028"
    },
    {
        yearData: [
            { year: "2550", per: "-1.83" },
            { year: "2551", per: "-1.44" },
            { year: "2552", per: "-2.29" },
            { year: "2553", per: "-2.59" },
            { year: "2554", per: "-2.63" },
            { year: "2555", per: "-2.10" },
            { year: "2556", per: "-1.25" },
            { year: "2557", per: "-1.16" },
            { year: "2558", per: "-0.80" },
            { year: "2559", per: "-1.43" }
        ],
        id: 29,
        name: "คลองสาน",
        dcode: "1029"
    },
    {
        yearData: [
            { year: "2550", per: "-0.75" },
            { year: "2551", per: "-0.69" },
            { year: "2552", per: "-0.74" },
            { year: "2553", per: "-0.84" },
            { year: "2554", per: "-0.88" },
            { year: "2555", per: "-0.34" },
            { year: "2556", per: "0.06" },
            { year: "2557", per: "-0.36" },
            { year: "2558", per: "-0.45" },
            { year: "2559", per: "-0.95" }
        ],
        id: 30,
        name: "บางกอกน้อย",
        dcode: "1030"
    },
    {
        yearData: [
            { year: "2550", per: "-1.04" },
            { year: "2551", per: "-1.48" },
            { year: "2552", per: "-1.83" },
            { year: "2553", per: "-1.12" },
            { year: "2554", per: "-2.48" },
            { year: "2555", per: "-1.60" },
            { year: "2556", per: "-1.44" },
            { year: "2557", per: "-1.32" },
            { year: "2558", per: "-0.76" },
            { year: "2559", per: "-1.31" }
        ],
        id: 31,
        name: "บางพลัด",
        dcode: "1031"
    },
    {
        yearData: [
            { year: "2550", per: "2.38" },
            { year: "2551", per: "1.86" },
            { year: "2552", per: "1.58" },
            { year: "2553", per: "0.96" },
            { year: "2554", per: "1.21" },
            { year: "2555", per: "1.49" },
            { year: "2556", per: "1.66" },
            { year: "2557", per: "1.76" },
            { year: "2558", per: "1.21" },
            { year: "2559", per: "2.61" }
        ],
        id: 32,
        name: "บางกอกใหญ่",
        dcode: "1032"
    },
    {
        yearData: [
            { year: "2550", per: "-1.31" },
            { year: "2551", per: "-1.25" },
            { year: "2552", per: "-3.14" },
            { year: "2553", per: "-1.56" },
            { year: "2554", per: "-2.15" },
            { year: "2555", per: "-1.34" },
            { year: "2556", per: "-0.86" },
            { year: "2557", per: "-0.78" },
            { year: "2558", per: "-0.70" },
            { year: "2559", per: "-2.12" }
        ],
        id: 33,
        name: "ภาษีเจริญ",
        dcode: "1033"
    },
    {
        yearData: [
            { year: "2550", per: "0.70" },
            { year: "2551", per: "-0.19" },
            { year: "2552", per: "-0.16" },
            { year: "2553", per: "0.07" },
            { year: "2554", per: "-0.47" },
            { year: "2555", per: "0.27" },
            { year: "2556", per: "0.83" },
            { year: "2557", per: "1.44" },
            { year: "2558", per: "1.20" },
            { year: "2559", per: "1.62" }
        ],
        id: 34,
        name: "บางขุนเทียน",
        dcode: "1034"
    },
    {
        yearData: [
            { year: "2550", per: "-0.79" },
            { year: "2551", per: "-0.74" },
            { year: "2552", per: "-1.03" },
            { year: "2553", per: "-1.05" },
            { year: "2554", per: "-1.12" },
            { year: "2555", per: "-0.43" },
            { year: "2556", per: "-0.52" },
            { year: "2557", per: "-0.72" },
            { year: "2558", per: "-0.59" },
            { year: "2559", per: "-0.93" }
        ],
        id: 35,
        name: "จอมทอง",
        dcode: "1035"
    },
    {
        yearData: [
            { year: "2550", per: "0.92" },
            { year: "2551", per: "0.91" },
            { year: "2552", per: "0.52" },
            { year: "2553", per: "0.56" },
            { year: "2554", per: "-0.09" },
            { year: "2555", per: "0.26" },
            { year: "2556", per: "0.72" },
            { year: "2557", per: "0.22" },
            { year: "2558", per: "0.63" },
            { year: "2559", per: "-0.21" }
        ],
        id: 36,
        name: "ตลิ่งชัน",
        dcode: "1036"
    },
    {
        yearData: [
            { year: "2550", per: "-1.09" },
            { year: "2551", per: "0.51" },
            { year: "2552", per: "-1.37" },
            { year: "2553", per: "-1.10" },
            { year: "2554", per: "-4.37" },
            { year: "2555", per: "0.52" },
            { year: "2556", per: "0.37" },
            { year: "2557", per: "0.33" },
            { year: "2558", per: "0.09" },
            { year: "2559", per: "-1.93" }
        ],
        id: 37,
        name: "ราษฎร์บูรณะ",
        dcode: "1037"
    },
    {
        yearData: [
            { year: "2550", per: "1.05" },
            { year: "2551", per: "0.79" },
            { year: "2552", per: "0.83" },
            { year: "2553", per: "0.12" },
            { year: "2554", per: "-0.28" },
            { year: "2555", per: "-0.02" },
            { year: "2556", per: "0.24" },
            { year: "2557", per: "-0.20" },
            { year: "2558", per: "-0.21" },
            { year: "2559", per: "-0.77" }
        ],
        id: 38,
        name: "หนองแขม",
        dcode: "1038"
    },
    {
        yearData: [
            { year: "2550", per: "0.18" },
            { year: "2551", per: "0.38" },
            { year: "2552", per: "-0.47" },
            { year: "2553", per: "0.32" },
            { year: "2554", per: "-0.10" },
            { year: "2555", per: "1.12" },
            { year: "2556", per: "1.08" },
            { year: "2557", per: "1.07" },
            { year: "2558", per: "0.55" },
            { year: "2559", per: "0.65" }
        ],
        id: 39,
        name: "วัฒนา",
        dcode: "1039"
    },
    {
        yearData: [
            { year: "2550", per: "0.56" },
            { year: "2551", per: "0.44" },
            { year: "2552", per: "0.01" },
            { year: "2553", per: "-0.15" },
            { year: "2554", per: "-0.47" },
            { year: "2555", per: "-0.26" },
            { year: "2556", per: "0.18" },
            { year: "2557", per: "-0.08" },
            { year: "2558", per: "0.10" },
            { year: "2559", per: "0.14" }
        ],
        id: 40,
        name: "บางแค",
        dcode: "1040"
    },
    {
        yearData: [
            { year: "2550", per: "-0.74" },
            { year: "2551", per: "-0.46" },
            { year: "2552", per: "-1.16" },
            { year: "2553", per: "-1.11" },
            { year: "2554", per: "-1.58" },
            { year: "2555", per: "-1.14" },
            { year: "2556", per: "-0.74" },
            { year: "2557", per: "-1.15" },
            { year: "2558", per: "-0.80" },
            { year: "2559", per: "-1.26" }
        ],
        id: 41,
        name: "หลักสี่",
        dcode: "1041"
    },
    {
        yearData: [
            { year: "2550", per: "2.35" },
            { year: "2551", per: "1.91" },
            { year: "2552", per: "1.28" },
            { year: "2553", per: "2.63" },
            { year: "2554", per: "1.45" },
            { year: "2555", per: "1.17" },
            { year: "2556", per: "1.79" },
            { year: "2557", per: "1.55" },
            { year: "2558", per: "1.31" },
            { year: "2559", per: "1.68" }
        ],
        id: 42,
        name: "สายไหม",
        dcode: "1042"
    },
    {
        yearData: [
            { year: "2550", per: "0.55" },
            { year: "2551", per: "0.66" },
            { year: "2552", per: "0.38" },
            { year: "2553", per: "0.50" },
            { year: "2554", per: "0.96" },
            { year: "2555", per: "1.49" },
            { year: "2556", per: "2.22" },
            { year: "2557", per: "1.83" },
            { year: "2558", per: "1.04" },
            { year: "2559", per: "2.49" }
        ],
        id: 43,
        name: "คันนายาว",
        dcode: "1043"
    },
    {
        yearData: [
            { year: "2550", per: "1.31" },
            { year: "2551", per: "1.21" },
            { year: "2552", per: "1.07" },
            { year: "2553", per: "0.64" },
            { year: "2554", per: "0.38" },
            { year: "2555", per: "1.10" },
            { year: "2556", per: "1.63" },
            { year: "2557", per: "1.51" },
            { year: "2558", per: "0.88" },
            { year: "2559", per: "1.53" }
        ],
        id: 44,
        name: "สะพานสูง",
        dcode: "1044"
    },
    {
        yearData: [
            { year: "2550", per: "0.03" },
            { year: "2551", per: "0.61" },
            { year: "2552", per: "0.02" },
            { year: "2553", per: "-0.01" },
            { year: "2554", per: "-0.53" },
            { year: "2555", per: "-0.29" },
            { year: "2556", per: "0.05" },
            { year: "2557", per: "-0.49" },
            { year: "2558", per: "-0.46" },
            { year: "2559", per: "-0.76" }
        ],
        id: 45,
        name: "วังทองหลาง",
        dcode: "1045"
    },
    {
        yearData: [
            { year: "2550", per: "3.93" },
            { year: "2551", per: "3.71" },
            { year: "2552", per: "3.33" },
            { year: "2553", per: "3.69" },
            { year: "2554", per: "3.04" },
            { year: "2555", per: "2.65" },
            { year: "2556", per: "2.63" },
            { year: "2557", per: "2.73" },
            { year: "2558", per: "2.24" },
            { year: "2559", per: "3.57" }
        ],
        id: 46,
        name: "คลองสามวา",
        dcode: "1046"
    },
    {
        yearData: [
            { year: "2550", per: "-0.33" },
            { year: "2551", per: "-0.87" },
            { year: "2552", per: "-0.91" },
            { year: "2553", per: "-0.70" },
            { year: "2554", per: "-1.85" },
            { year: "2555", per: "-1.22" },
            { year: "2556", per: "-0.68" },
            { year: "2557", per: "-0.93" },
            { year: "2558", per: "-0.71" },
            { year: "2559", per: "-1.73" }
        ],
        id: 47,
        name: "บางนา",
        dcode: "1047"
    },
    {
        yearData: [
            { year: "2550", per: "2.59" },
            { year: "2551", per: "2.61" },
            { year: "2552", per: "1.95" },
            { year: "2553", per: "1.59" },
            { year: "2554", per: "1.16" },
            { year: "2555", per: "1.08" },
            { year: "2556", per: "0.67" },
            { year: "2557", per: "0.43" },
            { year: "2558", per: "0.47" },
            { year: "2559", per: "0.53" }
        ],
        id: 48,
        name: "ทวีวัฒนา",
        dcode: "1048"
    },
    {
        yearData: [
            { year: "2550", per: "1.04" },
            { year: "2551", per: "1.24" },
            { year: "2552", per: "1.04" },
            { year: "2553", per: "0.83" },
            { year: "2554", per: "0.60" },
            { year: "2555", per: "0.60" },
            { year: "2556", per: "0.98" },
            { year: "2557", per: "1.43" },
            { year: "2558", per: "0.81" },
            { year: "2559", per: "0.55" }
        ],
        id: 49,
        name: "ทุ่งครุ",
        dcode: "1049"
    },
    {
        yearData: [
            { year: "2550", per: "1.93" },
            { year: "2551", per: "1.68" },
            { year: "2552", per: "0.49" },
            { year: "2553", per: "1.03" },
            { year: "2554", per: "0.22" },
            { year: "2555", per: "0.38" },
            { year: "2556", per: "0.88" },
            { year: "2557", per: "0.99" },
            { year: "2558", per: "0.22" },
            { year: "2559", per: "-0.22" }
        ],
        id: 50,
        name: "บางบอน",
        dcode: "1050"
    }
];

const BarChart = () => {
    const [selectedItem, setSelectedItem] = useState([]);
    const [years, setyear] = useState([])
    const width = 327;
    const barHeight = 11;
    const barGap = 2;
    const chartHeight = 160;
    const center = width / 2;

    const handleSelectChange = (event) => {
        const selectedItemName = event.target.value;
        const selectedItem = data.find((item) => item.name === selectedItemName);
        setSelectedItem(selectedItem);
        setyear(selectedItem.yearData);

    };

    return (
        <div>
            <h2>การเติบโต</h2>
            <select
                value={selectedItem ? selectedItem.name : ""}
                onChange={handleSelectChange}
            >
                <option value="">Select an item</option>
                {data.map((item, index) => (
                    <option value={item.name} key={index}>
                        {item.name}
                    </option>
                ))}
            </select>

            <svg viewBox={`0 0 ${width} ${chartHeight}`}>
                {years.map((years, index) => {

                    const abs = Math.abs(+years.per)
                    const maxvalue = Math.max(abs)
                    const barWidth = (abs / maxvalue) * (center - 50);
                    console.log(index + " barWidth " +(abs / maxvalue)/100)

                    const x = +years.per < 0 ? center - barWidth : center;
                    const y = index * (barHeight + barGap);

                    return (
                        <g key={index}>

                            <rect
                                x={x}
                                y={y}
                                width={barWidth}
                                height={barHeight}
                                fill={"#ED2E7C"}
                            />

                        </g>
                    );
                })}
            </svg>
        </div>
    );
};

export default BarChart;
