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
        <div className="social-media">
          <span>instagram</span>
          <span>facebook</span>
        </div>
        <p className="copyrights text-center">&copy;2023 EVERCERA, 兆富股份有限公司</p>
      </section>
    </footer>
  )
}
