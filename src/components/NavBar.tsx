import * as React from "react";

interface INavbarState {
  linkClass: string;
  isToggled: boolean;
}

class Navbar extends React.Component {
  public state = {
    isToggled: true,
    linkClass: "navbar__link"
  };

  public toggleNav = () => {
    const { isToggled } = this.state;
    this.setState({ isToggled: !isToggled });
    isToggled
      ? this.setState({ linkClass: "navbar__link--show" })
      : this.setState({ linkClass: "navbar__link" });
  };

  public render() {
    return (
      <div className="navbar">
        <div className="navbar__brand">
          <p>JW</p>
        </div>
        <i onClick={this.toggleNav} className="fas fa-bars navbar__hamburger" />
        <div className="navbar__link-box">
          <div className={this.state.linkClass}>
            <p className="navbar__link-text">Home</p>
          </div>
          <div className={this.state.linkClass}>
            <p className="navbar__link-text">Recent Work</p>
          </div>
          <div className={this.state.linkClass}>
            <p className="navbar__link-text">Skills</p>
          </div>
          <div className={this.state.linkClass}>
            <p className="navbar__link-text">Recommendations</p>
          </div>
          <div className={this.state.linkClass}>
            <p className="navbar__link-text">Contact</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
