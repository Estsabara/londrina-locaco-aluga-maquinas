
import { ShieldCheck, CreditCard, Shield } from "lucide-react";

export function PaymentInfo() {
  return (
    <div className="border-t bg-primary">
      <div className="container py-8">
        <div className="space-y-8">
          {/* Payment Methods */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-white">Formas de Pagamento</h3>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              <CreditCard className="h-8 w-8 text-white" />
              {/* Use images for credit card brands instead of unavailable Lucide icons */}
              <div className="bg-white p-1 rounded-md">
                <img src="/lovable-uploads/1db7ca5b-3540-4477-9960-c46f9f7ac68a.png" alt="Elo" className="h-7 w-auto" />
              </div>
              <div className="bg-white p-1 rounded-md">
                <svg className="h-7 w-auto" viewBox="0 0 780 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40 0H740C762.091 0 780 17.9086 780 40V460C780 482.091 762.091 500 740 500H40C17.9086 500 0 482.091 0 460V40C0 17.9086 17.9086 0 40 0Z" fill="#0066B2"/>
                  <path d="M470 374.25H311.475V125.75H470V374.25Z" fill="#FFFFFF"/>
                  <path d="M326.05 250C326.05 202.1 349.2 159.075 390.75 132.275C365.075 113.75 334.075 103 300.775 103C207.95 103 132.825 178.125 132.825 270.95C132.825 363.775 207.95 438.9 300.775 438.9C334.075 438.9 365.075 428.15 390.75 409.625C349.2 382.925 326.05 339.875 326.05 292V250Z" fill="#EB001B"/>
                  <path d="M647.175 270.95C647.175 363.775 572.05 438.9 479.225 438.9C445.925 438.9 414.925 428.15 389.25 409.625C430.9 382.825 454.05 339.875 454.05 292V250C454.05 202.1 430.9 159.075 389.25 132.275C414.925 113.75 445.925 103 479.225 103C572.05 103 647.175 178.225 647.175 271.05V270.95Z" fill="#F79E1B"/>
                </svg>
              </div>
              <div className="bg-white p-1 rounded-md">
                <svg className="h-7 w-auto" viewBox="0 0 780 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40 0H740C762.091 0 780 17.9086 780 40V460C780 482.091 762.091 500 740 500H40C17.9086 500 0 482.091 0 460V40C0 17.9086 17.9086 0 40 0Z" fill="#00579F"/>
                  <path d="M293.2 345.9L328.2 155.1H383.8L348.8 345.9H293.2Z" fill="white"/>
                  <path d="M566.6 160.5C555 155.9 536.8 151 514.2 151C451.8 151 408.2 183.3 407.9 230.1C407.6 264.3 438.8 283.4 462.5 294.8C486.8 306.5 496 314 495.9 324.6C495.7 340.7 476.2 348 458.1 348C432.5 348 418.5 343.3 396.9 333.5L388 329.2L378.5 376.7C392 383.7 417.9 389.8 444.6 390C511.7 390 554.5 358 554.9 308.5C555.1 281.7 539.1 261 502.2 243.8C480.6 232.7 467.9 225.3 468 214.8C468 205.7 478.9 196 500.8 196C519.7 196.1 533.3 200.4 543.9 205.3L550.2 208.2L559.6 160.5H566.6Z" fill="white"/>
                  <path d="M651.2 155.1H608.5C595.8 155.1 586.7 158.7 581.3 173.1L496.8 345.9H563.9C563.9 345.9 572.2 323.3 574.1 318.3C580.8 318.3 625.4 318.3 633.9 318.3C635.4 324.7 640 345.9 640 345.9H699.7L651.2 155.1ZM593.1 279.3C597.6 267.7 612.1 229.6 612.1 229.6C611.8 230.1 616.2 218.5 618.8 211.4L622.2 227.9C622.2 227.9 631.2 269.5 633.3 279.3H593.1Z" fill="white"/>
                  <path d="M235.3 155.1L171.5 286.2L163.8 256C151.4 223.3 120.6 188.4 86.5 171.3L145.1 345.8H212.7L312.1 155.1H235.3Z" fill="white"/>
                  <path d="M148.5 155.1H46.6L45.6 159.9C115.9 178.3 162.4 214.4 181.2 256.1L155.1 173.3C150.9 159.2 140.8 155.8 128.4 155.1H148.5Z" fill="#FAA61A"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Security Seals */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-white">Certificados e Segurança</h3>
            <div className="flex justify-center items-center gap-6">
              <div className="flex items-center bg-white px-4 py-2 rounded-lg">
                <ShieldCheck className="h-6 w-6 text-primary mr-2" />
                <span className="text-sm font-medium">Site Seguro</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-lg">
                <Shield className="h-6 w-6 text-primary mr-2" />
                <span className="text-sm font-medium">SSL Certificado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
