import React from 'react'
import { Divider, Link } from '@nextui-org/react'

export default function App() {
  const footerItems = [
    {
      title: {
        en: 'Cooperation',
        'zh-tw': '公司介紹'
      },
      items: [
        { en: 'History', 'zh-tw': '公司歷程' },
        { en: 'Process', 'zh-tw': '產品製程' },
        { en: 'Products', 'zh-tw': '產品類別' }
      ]
    },
    {
      title: {
        en: 'Contact',
        'zh-tw': '聯絡資訊'
      },
      items: [
        { en: 'History', 'zh-tw': '公司地址', content: '新北市鶯歌區建國路588號' },
        { en: 'Phone', 'zh-tw': '連絡電話', content: '02-8677-7338' },
        { en: 'E-mail', 'zh-tw': '電子郵件', content: 'evercera@gmail.com' }
      ]
    },
    {
      title: {
        en: 'Act',
        'zh-tw': '法律'
      },
      items: [
        { en: 'Privacy policy', 'zh-tw': '隱私權' },
        { en: 'Terms and conditions', 'zh-tw': '服務條款' },
        { en: 'Copyrights', 'zh-tw': '版權' }
      ]
    }
  ]
  const year = new Date().getFullYear()
  return (
    <footer className="bg-primary-700 text-primary-100 flex flex-col items-center">
      <section className="w-2/3 grid grid-cols-1 sm:grid-cols-3 py-[6rem] gap-5">
        {footerItems.map((item, index) => (
          <div className="flex flex-col items-center sm:items-start" key={index}>
            <span className="font-semibold text-lg block mb-5">{item.title['zh-tw']}</span>
            {item.items.map((sub, i) => (
              <Link underline="hover" className="text-primary-100 mb-3" key={i} href="#">
                {sub['zh-tw']}
              </Link>
            ))}
          </div>
        ))}
      </section>
      <Divider className="bg-primary-100 w-2/3" />
      <section className="flex flex-col justify-center items-center py-[6rem]">
        <div className="flex justify-center items-center">
          <a href="#facebook" className="block text-primary-50">
            <svg
              className="fill-primary-50 w-8 h-8"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
            </svg>
          </a>
          <a className="block" href="#line">
            <svg
              className="fill-primary-50 w-10 h-10"
              width="32px"
              height="32px"
              viewBox="-5.5 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>line</title>
              <path d="M10.656 5.938c5.938 0 10.719 3.875 10.719 8.688 0 2.344-1.156 4.406-2.969 6.031-2.938 2.906-8 5.844-8.531 5.625-0.875-0.344 0.656-2.219 0.031-3.031-0.094-0.125-0.438-0.094-1.063-0.188-5.156-0.688-8.844-4.094-8.844-8.469 0-4.813 4.75-8.656 10.656-8.656zM4.563 17.5h1.813c0.313 0 0.5-0.25 0.5-0.563 0-0.219-0.156-0.5-0.563-0.5h-1.469c-0.125 0-0.125-0.125-0.125-0.563v-3.156c0-0.281-0.188-0.563-0.531-0.563-0.313 0-0.531 0.25-0.531 0.563v3.813c0 0.844 0.406 0.969 0.906 0.969zM8.656 17.063v-4.344c0-0.281-0.219-0.563-0.563-0.563-0.281 0-0.531 0.25-0.531 0.563v4.344c0 0.281 0.219 0.5 0.563 0.5 0.281 0 0.531-0.219 0.531-0.5zM13.781 16.469v-3.813c0-0.281-0.219-0.5-0.563-0.5-0.25 0-0.531 0.156-0.531 0.5v2.75l-1.813-2.531c-0.25-0.438-0.563-0.719-0.938-0.719-0.469 0-0.5 0.375-0.5 0.906v4c0 0.281 0.219 0.5 0.531 0.5 0.281 0 0.531-0.188 0.531-0.5v-2.844l1.813 2.531c0.406 0.531 0.5 0.813 1 0.813 0.344 0 0.469-0.313 0.469-1.094zM17.281 14.313h-1.594v-0.906c0-0.094 0.031-0.219 0.188-0.219h1.406c0.344 0 0.563-0.188 0.563-0.531 0-0.406-0.313-0.531-0.594-0.531h-1.813c-0.563 0-0.844 0.375-0.844 0.875v3.531c0 0.625 0.25 0.969 0.844 0.969h1.844c0.406 0 0.563-0.25 0.563-0.563 0-0.406-0.313-0.531-0.563-0.531h-1.375c-0.125 0-0.219-0.094-0.219-0.188v-0.875h1.656c0.406 0 0.469-0.313 0.469-0.531 0-0.313-0.25-0.5-0.531-0.5z"></path>
            </svg>
          </a>
        </div>
        <p className="copyrights text-center font-bold">
          &copy;{year} EVERCERA, 兆富宏業股份有限公司
        </p>
      </section>
    </footer>
  )
}
