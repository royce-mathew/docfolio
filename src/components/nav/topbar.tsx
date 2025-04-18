import React from "react"

import { siteConfig } from "@/config/docs"

const Topbar: React.FC = () => {
  return (
    <div className="max-h-8 w-full">
      <nav>
        <ul>
          {siteConfig.mainNav.map((item, index) => (
            <li key={index}>
              <a href={item.href as string}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Topbar
