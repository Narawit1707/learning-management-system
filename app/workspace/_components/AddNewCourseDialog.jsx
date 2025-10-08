import React, { Children } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Sparkle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { Textarea} from '@/components/ui/textarea'
import { desc } from 'drizzle-orm'

function AddNewCourseDialog({ children }) {

     const [formData,setFormData]=useState({
            name:'',
            description:'',
            includeVideo:false,
            noOfchapters:0,
            level:'',
            category:'' 
     });


     const onHandleInputChange=(field,value)=>{
        setFormData(prev=>({
            ...prev,
            [field]:value
        }));
        console.log(formData);
     }

     const onGenarate = () => {
            console.log(formData);
     }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Course Using AI?</DialogTitle>
          <DialogDescription asChild>
            <div className='flex flex-col gap-4 mt-3'>
                  <div>
                    <label> Course Name </label>
                    <input placeholder="Course Name" 
                    onChange={ (event)=>onHandleInputChange('courseName',event?.target.value)}/>
                  </div>

                  <div>
                    <label> Course Description (Optional) </label>
                    <Textarea placeholder="Course Description" 
                    onChange={ (event)=>onHandleInputChange('description',event?.target.value)}/>
                  </div>

                  <div>
                    <label> No. Of Chapter</label>
                    <input placeholder="No of chapters" type='number' 
                    onChange={ (event)=>onHandleInputChange('noOfchapters',event?.target.value)}/>
                  </div>

                  <div className='flex gap-3 items-center'>
                        <label>Include Video</label>
                        <Switch
                         onCheckedChange={()=>onHandleInputChange('includeVideo,!formData?.includeVideo')} />
                  </div>

                  <div>
                    <label className='mb-2'>Difficult Level</label>
                    <Select onValueChange={(value)=>onHandleInputChange('level',value)}>
                            <SelectTrigger className="w-full">
                            <SelectValue placeholder="Difficult Level" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="moderate">Moderate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                        </Select>
                  </div>

                <div>
                    <label> Category </label>
                    <input placeholder="Category (Sperated by Comma)"
                    onChange={ (event)=>onHandleInputChange('category',event?.target.value)}/>
                  </div>

                <div className='mt-5'>
                    <Button className={'w-full'} onClick={onGenarate}> <Sparkle/>Generate Course</Button>
                </div>

            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}


export default AddNewCourseDialog