import React, { useState } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/component/ui/form";
import { Input } from "@/component/ui/input";
import { useFormContext } from "react-hook-form";

type InputProps = {
  value?: string;
  label: string;
  type?: string;
  required?: boolean;
  name?: string;
  placeholder?: string;
  tooltip?: string;
  classes?: string;
};

export const CustomInput = (props: InputProps) => {
  const {
    label,
    type = "text",
    required = false,
    name,
    placeholder,
    tooltip,
    classes,
    ...rest
  } = props;
  const { control } = useFormContext();
  const [isInputClicked, setIsInputClicked] = useState(false);

  const handleInputClick = () => {
    setIsInputClicked(true);
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem className="w-full ">
            <FormLabel className={"text-sm text-white " + classes}>
              {label}
              <span className="text-red-600 text-xs">*</span>
            </FormLabel>
            <FormControl
              className={
                `bg-theme-primary-900 text-gray-900 border border-theme-secondary-300
                focus-visible:ring-transparent ${classes} ${isInputClicked ? 'fade-animation' : ''}`
              }
            >
              <Input
                placeholder={placeholder}
                type={type}
                {...field}
                {...rest}
                className=""
                onClick={handleInputClick}
              />
            </FormControl>
            <FormMessage className="text-xs text-red-500" />
          </FormItem>
        );
      }}
    />
  );
};
  