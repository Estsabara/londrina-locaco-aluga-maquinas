
import { UseFormReturn } from "react-hook-form";
import { BasicInfoFields } from "./BasicInfoFields";
import { AdditionalInfoFields } from "./AdditionalInfoFields";
import { PricingFields } from "./PricingFields";

interface FormFieldsProps {
  form: UseFormReturn<any>;
}

export function FormFields({ form }: FormFieldsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-6">
        <BasicInfoFields form={form} />
        <PricingFields form={form} />
      </div>
      <AdditionalInfoFields form={form} />
    </div>
  );
}
