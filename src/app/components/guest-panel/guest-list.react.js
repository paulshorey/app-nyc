(function() {
    window.YouNow.ReactComponents.GuestListComponent = React.createClass({
      propTypes: {
        guests : React.PropTypes.array,
        userId: React.PropTypes.any,
        config: React.PropTypes.object,
        openProfile: React.PropTypes.func.isRequired,
        inviteGuest: React.PropTypes.func.isRequired,
        broadcaster: React.PropTypes.object,
        translatedText: React.PropTypes.object
      },
      render: function() {
            var userId = this.props.userId,
                config = this.props.config,
                broadcaster = this.props.broadcaster,
                guest_make = this.props.translatedText.guest_make,
                _openProfile = this.props.openProfile,
                _inviteGuest = this.props.inviteGuest,
                openProfile = function(i) {
                    _openProfile(this, i);
                },
                inviteGuest = function() {
                    _inviteGuest(this);
                },
                extraSummary,
                description,
                guestItems,
                UserBadgeRt = window.YouNow.ReactComponents.UserBadge;

            if(this.props.guests && this.props.guests.length > 0) {
                var guestList = this.props.guests.map(function(guest, i) {
                    if(guest.userId != userId) {
                        if(guest.bars > 0 && guest.formattedLocation.length > 0) {
                            extraSummary = <div><span className="guest-bars"><i className="ynicon ynicon-icon-bar"></i> {guest.bars}</span><span className="bullet">&#8226;</span><span className="guest-location">{guest.formattedLocation}</span></div>;
                        } else if(guest.bars > 0) {
                            extraSummary =  <div><span className="guest-bars"><i className="ynicon ynicon-icon-bar"></i> {guest.bars}</span></div>;
                        } else if(guest.formattedLocation.length > 0) {
                            extraSummary = <div><span className="guest-location">{guest.formattedLocation}</span></div>;
                        } else {
                            extraSummary = null;
                        }

                        if(guest.description && guest.description.length > 0) {
                            description = <div className="description line-clamp">{guest.description}</div>;
                        } else {
                            description = null;
                        }
                        return  (
                            <div className="guest" key={guest.userId}>
                                <div className="thumb clickable" onClick={openProfile.bind(guest.userId, i)} style={{"backgroundImage": "url("+ config.settings.GuestSnapshotsBaseUrl + guest.snapshotUrl+")", "backgroundSize": "cover"}}></div>
                                <div className="summary">
                                    <div className="guest-name short-text clickable" onClick={openProfile.bind(guest.userId, i)}>
                                        <UserBadgeRt role={guest.chatRole} level={guest.level} subscriptionType={guest.subscriptionType} channelId={guest.userId} broadcaster={broadcaster} config={config} />
                                        <b>{guest.name}</b>
                                    </div>
                                    {extraSummary}
                                    {description}
                                    <button className="btn btn-primary" onClick={inviteGuest.bind(guest)}>{guest_make}</button>
                                </div>
                            </div>
                        );
                    }
                });
                return (<div>{guestList}</div>);
            } else {
                return null;
            }
      }
    });
})();
