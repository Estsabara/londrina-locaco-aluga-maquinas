
import { UseFormReturn } from "react-hook-form";
import { BasicInfoFields } from "./BasicInfoFields";
import { AdditionalInfoFields } from "./AdditionalInfoFields";

interface FormFieldsProps {
  form: UseFormReturn<any>;
}

export function FormFields({ form }: FormFieldsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <BasicInfoFields form={form} />
      <AdditionalInfoFields form={form} />
    </div>
  );
}
