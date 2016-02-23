(function() {
    window.YouNow.ReactComponents.UserBadge = React.createClass({
      propTypes: {
        role : React.PropTypes.any,
        level: React.PropTypes.number,
        subscriptionType: React.PropTypes.any,
        channelId: React.PropTypes.any,
        broadcaster: React.PropTypes.object,
        config: React.PropTypes.object
      },
      render: function() {
            var ynbadge = null,
                userLevelBadge = null,
                userCrowns = null,
                userLevelNum = null;

            if(this.props.subscriptionType != '0' || (this.props.broadcaster.isSubscribabel && this.props.channelId == this.props.broadcaster.userId) ) {
                ynbadge = <span className="user-crowns ynbadge"><img src={this.props.config.settings.BadgeBaseUrl + '/' + this.props.broadcaster.userId + '/' + (this.props.subscriptionType != '0' ? this.props.subscriptionType : 1) + '/badge@2x.png'} /></span>
            }

            if(this.props.subscriptionType == '0' && this.props.level && (this.props.role == '0' || this.props.role == 3) ) {
                userLevelBadge = <span className="user-crowns"><i className="ynicon ynicon-level"></i></span>;
            }

            if(this.props.role == 2) {
                userCrowns = <span className="user-crowns"><i className="ynicon ynicon-ambass"></i></span>;
            } else if ( (this.props.role == 4 || this.props.role == 5 || this.props.role == 6) && this.props.level) {
                if(this.props.role == 4) {
                    userCrowns = <span><i className="ynicon ynicon-icon-whale"></i><i className="ynicon ynicon-icon-whale"></i><i className="ynicon ynicon-icon-whale"></i></span>;
                } else if(this.props.role == 5) {
                    userCrowns = <span><i className="ynicon ynicon-icon-whale"></i><i className="ynicon ynicon-icon-whale"></i></span>;
                } else {
                    userCrowns = <span><i className="ynicon ynicon-icon-whale"></i></span>;
                }
            } else if ( (this.props.role == 7 || this.props.role == 8 || this.props.role == 9) && this.props.level) {
                if(this.props.role == 7) {
                    userCrowns = <span><i className="ynicon ynicon-icon-whale2"></i><i className="ynicon ynicon-icon-whale2"></i><i className="ynicon ynicon-icon-whale2"></i></span>;
                } else if(this.props.role == 8) {
                    userCrowns = <span><i className="ynicon ynicon-icon-whale2"></i><i className="ynicon ynicon-icon-whale2"></i></span>;
                } else {
                    userCrowns = <span><i className="ynicon ynicon-icon-whale2"></i></span>;
                }
            } else if ( (this.props.role == 10 || this.props.role == 11 || this.props.role == 12) && this.props.level) {
                if(this.props.role == 10) {
                    userCrowns = <span><i className="ynicon ynicon-icon-whale2"></i><i className="ynicon ynicon-icon-whale"></i></span>;
                } else if(this.props.role == 11) {
                    userCrowns = <span><i className="ynicon ynicon-icon-whale2"></i><i className="ynicon ynicon-icon-whale"></i><i className="ynicon ynicon-icon-whale"></i></span>;
                } else {
                    userCrowns = <span><i className="ynicon ynicon-icon-whale2"></i><i className="ynicon ynicon-icon-whale2"></i><i className="ynicon ynicon-icon-whale"></i></span>;
                }
            } else {}

            if(this.props.role != 1 && this.props.level > 1) {
                userLevelNum = <span className="chat-name level"><b>{this.props.level}</b></span>;
            }

            return  (
                <span className="crowns-container">
                    {ynbadge}
                    {userLevelBadge}
                    {userCrowns}
                    {userLevelNum}
                </span>
            );
      }
    });
})();
