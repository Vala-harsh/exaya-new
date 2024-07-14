"use client"

import { useFormContext } from "react-hook-form"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/component/ui/form"
import { Textarea } from "@/component/ui/textarea"
import { useState } from "react";


export function Customtextarea(props: any) {
  const { control } = useFormContext();
  const { required = false, classes } = props;
  const [isInputClicked, setIsInputClicked] = useState(false);
  const handleInputClick = () => {
    setIsInputClicked(true);
  };

  return (
    <FormField
      control={control}
      name={props.name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className={"text-sm text-white " + classes}>
            {props.label}
            <span className="text-red-600 text-xs">*</span>
          </FormLabel>
          <FormControl className={"" + classes}>
            <Textarea
              className={
                `bg-theme-primary-900 text-gray-900 border border-theme-secondary-300
  focus-visible:ring-transparent ${classes} ${isInputClicked ? 'fade-animation' : ''}`
              }
              placeholder={props.placeholder}
              onClick={handleInputClick}
            
              {...field}
            />
          </FormControl>
          <FormMessage className="text-xs text-red-500" />
        </FormItem>
      )}
    />
  );
}
