import { Control, useController } from "react-hook-form";
import { ComponentProps } from "react";
import { Input } from "./ui/input";

interface ITextInput extends ComponentProps<'input'> {
  name: string;
  control: Control<any>;
  label?: string;
  mask?: string;
}

export default function TextInput({ name, label, mask, control, ...inputProps }: ITextInput) {

  const { formState: { errors } } = useController({ control, name });

  return (
    <div className="flex-1">
      <div className="flex flex-col gap-2 flex-1 h-12 text-base">
        {/* {label && <Label>{label}</Label>} */}
        <Input
          {...control.register(name)}
          {...inputProps} 
        />
      </div>
      {errors[name] && (
        <span className="text-sm text-red-600">{errors[name].message?.toString()}</span>
      )}
    </div>
  )
}