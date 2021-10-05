const Layout = (props) => {
  return (
    <div>
      <div className="layout-children"> 
        {props.children}
      </div>
    </div>
  )
}

export default Layout
