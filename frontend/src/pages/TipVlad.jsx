import React from 'react'
import Layout from '../components/Layout'

export default function VibPokupka() {
  return (
    <Layout>
    <div className="tutu">
      <div className="container">
        
        <div className="f-main">
          <div>
            <p className="g-huli">Сервис</p>
            <p className="g-heading">Запчасти</p>
            <p className="g-heading">Запись на сервис</p>
            <p className="g-heading">Техническое обслуживание</p>
            <p className="g-heading">Гарантия</p>
            <p className="g-heading">Спецпредложения</p>
          </div>
          <div className="f-end">
            <div>
              <p className="g-huli">Горячая линия Kia</p>
              <p className="f-number">1333</p>
            </div>
            <div>
              <p className="g-huli">Информационная линия Kia</p>
              <p className="f-phone-number">+998 71 215-70-07</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}

