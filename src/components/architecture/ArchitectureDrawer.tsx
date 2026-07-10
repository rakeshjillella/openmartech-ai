"use client";

import SlideDrawer from "@/components/animation/SlideDrawer";

type Props={

nodeId:string|null;

onClose:()=>void;

};

export default function ArchitectureDrawer({

nodeId,

onClose,

}:Props){

return(

<SlideDrawer open={!!nodeId}>

<div className="p-8">

<button

onClick={onClose}

className="mb-8"

>

✕

</button>

<h2 className="text-3xl font-bold">

{nodeId}

</h2>

<p className="mt-6">

Technology information will appear here.

</p>

</div>

</SlideDrawer>

);

}