import React from "react"
import ContentLoader from "react-content-loader"

type MyLoaderPropsType = {}

const MyLoader = (props: MyLoaderPropsType) => (
    <ContentLoader className={"pizza-block"}
                   speed={2}
                   width={280}
                   height={500}
                   viewBox="0 0 280 500"
                   backgroundColor="#c9c9c9"
                   foregroundColor="#ecebeb"
                   {...props}
    >
        <circle cx="135" cy="121" r="121"/>
        <rect x="4" y="311" rx="9" ry="9" width="275" height="85"/>
        <rect x="12" y="416" rx="18" ry="18" width="73" height="51"/>
        <rect x="117" y="419" rx="20" ry="20" width="162" height="46"/>
        <rect x="24" y="252" rx="14" ry="14" width="231" height="45"/>
    </ContentLoader>
)

export default MyLoader

