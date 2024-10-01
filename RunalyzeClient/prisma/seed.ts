import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

function convertPaceToSeconds(pace: string): number {
    const [minutes, secondsPart] = pace.split("'");
    const seconds = secondsPart.replace('"', '');
    return parseInt(minutes) * 60 + parseInt(seconds);
}

async function main() {
    const passwordHash = await bcrypt.hash("19229094", 10);
    console.log('Verifying user...');
    let user = await prisma.user.findUnique({
        where: { email: "a_parreira@icloud.com" },
    });
    if (!user) {
        console.log('Creating user...');
        user = await prisma.user.create({
            data: {
                name: "Alfredo Silva",
                email: "a_parreira@icloud.com",
                password: passwordHash,
            },
        });
        console.log('User created!');
    } else {
        console.log('User already exists.');
    }

    const runsData = [
        { date: new Date("2024-09-25"), duration: 29, distance: 5.01, elevation: 20, avgPower: 232, avgCadence: 165, avgPace: "5'46\"", avgHeartRate: 166 },
        { date: new Date("2024-09-22"), duration: 66, distance: 10.01, elevation: 21, avgPower: 210, avgCadence: 156, avgPace: "6'35\"", avgHeartRate: 166 },
        { date: new Date("2024-09-17"), duration: 32, distance: 5.02, elevation: 18, avgPower: 212, avgCadence: 159, avgPace: "6'26\"", avgHeartRate: 160 },
        { date: new Date("2024-09-16"), duration: 19, distance: 3.01, elevation: 4, avgPower: 214, avgCadence: 157, avgPace: "6'23\"", avgHeartRate: 156 },
        { date: new Date("2024-09-11"), duration: 33, distance: 5.01, elevation: 4, avgPower: 211, avgCadence: 153, avgPace: "6'40\"", avgHeartRate: 160 },
        { date: new Date("2024-09-09"), duration: 29, distance: 3.03, elevation: 0, avgPower: 138, avgCadence: 139, avgPace: "9'49\"", avgHeartRate: 120 },
        { date: new Date("2024-09-07"), duration: 77, distance: 12, elevation: 48, avgPower: 213, avgCadence: 157, avgPace: "6'25\"", avgHeartRate: 169 },
        { date: new Date("2024-09-05"), duration: 43, distance: 7.02, elevation: 2, avgPower: 217, avgCadence: 157, avgPace: "6'09\"", avgHeartRate: 167 },
        { date: new Date("2024-02-27"), duration: 34, distance: 5.28, elevation: 9, avgPower: 216, avgCadence: 161, avgPace: "6'30\"", avgHeartRate: 166 },
        { date: new Date("2024-02-25"), duration: 54, distance: 8, elevation: 66, avgPower: 221, avgCadence: 153, avgPace: "6'45\"", avgHeartRate: 172 },
        { date: new Date("2024-02-20"), duration: 33, distance: 5.03, elevation: 36, avgPower: 215, avgCadence: 156, avgPace: "6'45\"", avgHeartRate: 165 },
        { date: new Date("2024-02-11"), duration: 33, distance: 5.25, elevation: 22, avgPower: 225, avgCadence: 154, avgPace: "6'28\"", avgHeartRate: 168 },
    ];

    console.log('Creating runs...');
    for (const runData of runsData) {
        await prisma.runnings.create({
            data: {
                userId: user.id,
                date: runData.date,
                duration: runData.duration,
                distance: runData.distance,
                elevation: runData.elevation,
                AvgPower: runData.avgPower,
                AvgCadence: runData.avgCadence,
                AvgPaceSeconds: convertPaceToSeconds(runData.avgPace),
                AvgHeartRate: runData.avgHeartRate,
            },
        });
    }
    console.log('Runs created!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
