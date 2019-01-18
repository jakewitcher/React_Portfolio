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
        <a className="navbar__brand" href="#">
          <p className="navbar__brand-text">JW</p>
        </a>
        <i onClick={this.toggleNav} className="fas fa-bars navbar__hamburger" />
        <div className="navbar__link-box">
          <a onClick={this.toggleNav} className={this.state.linkClass} href="#">
            <p className="navbar__link-text">Home</p>
          </a>

          <a
            onClick={this.toggleNav}
            className={this.state.linkClass}
            href="#recent-works"
          >
            <p className="navbar__link-text">Recent Work</p>
          </a>

          <a
            onClick={this.toggleNav}
            className={this.state.linkClass}
            href="#skills"
          >
            <p className="navbar__link-text">Skills</p>
          </a>

          <a
            onClick={this.toggleNav}
            className={this.state.linkClass}
            href="#recommendations"
          >
            <p className="navbar__link-text">Recommendations</p>
          </a>

          <a
            onClick={this.toggleNav}
            className={this.state.linkClass}
            href="#contact"
          >
            <p className="navbar__link-text">Contact</p>
          </a>
        </div>
      </div>
    );
  }
}
export default Navbar;
