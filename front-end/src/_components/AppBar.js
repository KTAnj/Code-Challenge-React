export default function AppBar() {
    return <div className="filters">
    <div className="row">
      <div className="left-side-filters col-6">
        <label className="mr-2 filter-input-label">Select assets, types and period:</label>
        <button className="btn btn-sm app-btn-green-outline">FILTER</button>
      </div>
      <div className="right-side-filters col-6">
        <div class="d-flex justify-content-end">
          <div className="d-flex mr-3">
            <label className="mr-2 filter-input-label">Units:</label>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn app-toggle-btn active btn-sm">
                <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /> % </label>
              <label className="btn app-toggle-btn btn-sm">
                <input type="radio" name="options" id="option2" autoComplete="off" /> $ </label>
            </div>
          </div>
          <div className="d-flex">
            <label className="mr-2 filter-input-label">Sort by:</label>
            <div class="dropdown">
              <button class="btn btn-sm dropdown-toggle filter-dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Trending
                  </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item">Trending</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}