import {Plus} from "iconoir-react";
import {Button} from "@/components/ui/button";
import Stats from "@/app/components/stats";
import RunningTable from "@/app/components/runningTable";


export default function Home() {
    return (
        <section className={'px-8 mt-8 flex justify-evenly gap-12'}>
            <div className={'w-1/2'}>
                <Button className="flex items-center gap-2 w-fit mb-6">
                    <Plus className="h-5 w-5"/>
                    Add Running
                </Button>
                <RunningTable/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 self-center w-1/2">
                <Stats/>
            </div>
        </section>
    );
}
