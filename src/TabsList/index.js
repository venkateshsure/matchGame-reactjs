import './index.css'

const TabsList = props => {
  const {each, isActive, changeActiveTab} = props
  const {tabId, displayText} = each
  const activeTabIdColor = isActive ? 'active-tab-button' : 'tab-button'
  const changeTab = () => {
    changeActiveTab(tabId)
  }

  return (
    <li onClick={changeTab} className="tab-list-con">
      <button type="button" className={`${activeTabIdColor}`}>
        {displayText}
      </button>
    </li>
  )
}

export default TabsList
