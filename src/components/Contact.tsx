import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import Container from './Container';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="order-2 lg:order-1">
            <div className="bg-primary-50 p-8 rounded-xl border border-primary-100 mb-8">
              <h3 className="text-2xl font-bold text-primary-800 mb-6 text-right">تواصل معنا</h3>
              
              {submitted ? (
                <div className="text-center py-8">
                  <div className="rounded-full bg-primary-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">تم استلام طلبك بنجاح!</h4>
                  <p className="text-slate-600">سيقوم فريقنا بالتواصل معك في أقرب وقت ممكن.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1 text-right">
                        الاسم الكامل
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-right"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1 text-right">
                        اسم الشركة
                      </label>
                      <input
                        type="text"
                        id="company"
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-right"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1 text-right">
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-right"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1 text-right">
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-right"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1 text-right">
                      الرسالة
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-right"
                    ></textarea>
                  </div>
                  <div className="text-left">
                    <button 
                      type="submit" 
                      className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md transition-all shadow-md hover:shadow-lg flex items-center gap-2 text-lg"
                    >
                      <span>طلب عرض توضيحي</span>
                      <ArrowRight className="h-5 w-5 rtl:rotate-180" />
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 text-center">
                <div className="rounded-full bg-primary-100 w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <p className="text-slate-900 font-medium">+968 2412 3456</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 text-center">
                <div className="rounded-full bg-primary-100 w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <p className="text-slate-900 font-medium">info@inviteflow.om</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 text-center">
                <div className="rounded-full bg-primary-100 w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <p className="text-slate-900 font-medium">مسقط، سلطنة عُمان</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-right">
              جاهزون <span className="text-primary-600">لترقية</span> تجربة تنظيم فعالياتك؟
            </h2>
            <p className="text-lg text-slate-600 mb-8 text-right">
              احصل على عرض توضيحي مجاني واكتشف كيف يمكن لنظام InviteFlow تحويل طريقة إدارتك للمناسبات والفعاليات.
            </p>
            
            <div className="bg-primary-100 p-6 rounded-xl mb-8 border border-primary-200">
              <h3 className="text-xl font-bold text-primary-800 mb-4 text-right">ما الذي يمكنك توقعه:</h3>
              <ul className="space-y-3 text-right">
                <li className="flex items-center justify-end gap-3">
                  <span className="text-slate-700">عرض شامل للنظام ومميزاته</span>
                  <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                </li>
                <li className="flex items-center justify-end gap-3">
                  <span className="text-slate-700">مناقشة احتياجاتك الخاصة</span>
                  <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                </li>
                <li className="flex items-center justify-end gap-3">
                  <span className="text-slate-700">خطة تنفيذ مخصصة</span>
                  <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                </li>
                <li className="flex items-center justify-end gap-3">
                  <span className="text-slate-700">عرض أسعار تنافسي</span>
                  <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-3 text-right">عرض خاص لفترة محدودة!</h3>
              <p className="mb-4 text-right">
                احصل على خصم 20% على الاشتراك السنوي عند التسجيل قبل نهاية الشهر الحالي.
              </p>
              <div className="flex justify-end">
                <a 
                  href="#contact" 
                  className="bg-white text-primary-600 hover:bg-primary-50 px-5 py-2 rounded-md transition-colors shadow-sm inline-block"
                >
                  احجز عرضك الآن
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;