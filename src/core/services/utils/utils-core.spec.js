describe('Utility service', function() {
    var Api, $location, $window, $httpBackend;

    beforeEach(function() {
        module('younow.core.services');
    });

    beforeEach(inject(function(ApiCore, _$location_, _$window_, _$httpBackend_) {
        Api = new ApiCore.Base(config);
        $location = _$location_;
        $window = _$window_;
        $httpBackend = _$httpBackend_;
    }));

    it('should return trusted src', function() {
        var trustedSrc = Api.trustedSrc('www.google.com');
        expect(trustedSrc.$$unwrapTrustedValue).toBeDefined();
    });

    it('should return trusted html', function() {
        var trustedHtml = Api.trustedHTML('<a href="www.google.com"><a>');
        var alreadyTrusted = Api.trustedHTML(trustedHtml);
        expect(trustedHtml.$$unwrapTrustedValue).toBeDefined();
        expect(alreadyTrusted.$$unwrapTrustedValue).toBeDefined();
    });

    it('should return a users fullname given the props', function() {
        var noUser = Api.fullName();
        var profileName = Api.fullName({
            useprofile: "1",
            profile: 'SomeProfileName'
        });
        var profileUrlString = Api.fullName({
            useprofile: "1",
            profileUrlString: 'SomeProfileUrlString'
        });
        var username = Api.fullName({
            useprofile: "0",
            username: 'SomeUserName'
        });
        var firstName = Api.fullName({
            useprofile: "0",
            firstName: 'Joe'
        });
        var fullName = Api.fullName({
            useprofile: "0",
            firstName: 'Joe',
            lastName: 'Smith'
        });
        expect(profileName).toBe('SomeProfileName');
        expect(profileUrlString).toBe('SomeProfileUrlString');
        expect(username).toBe('SomeUserName');
        expect(firstName).toBe('Joe');
        expect(fullName).toBe('Joe Smith');
    });

    it('should return a friendly name', function() {
        var profileName = Api.friendlyName({
            useprofile: "1",
            profile: 'SomeProfileName'
        });
        var firstName = Api.friendlyName({
            useprofile: "0",
            firstName: 'Joe'
        });
        expect(profileName).toBe('SomeProfileName');
        expect(firstName).toBe('Joe');
    });

    it('should return a clean location', function() {
        var twoPart = Api.cleanLocation({
            city: 'New York',
            state: 'NY',
            country: 'US'
        }, true);
        var normal = Api.cleanLocation({
            city: 'New York',
            state: 'NY',
            country: 'US'
        }, false);
        expect(twoPart).toBe('New York, US');
        expect(twoPart).not.toBe('New York, NY US');
        expect(normal).toBe('New York, NY US');
    });

    it('should find links', function() {
        var link = Api.findLinks('www.younow.com');
        var noLink = Api.findLinks("there shouldn't be a link in here!");
        var multipleLinks = Api.findLinks('One link is www.younow.com and another is www.facebook.com.');
        expect(link.length).toBe(1);
        expect(noLink.length).toBe(0);
        expect(multipleLinks.length).toBe(2);
    });

    it('should turn links into a elements', function() {
        var noText = Api.linkify();
        var previouslyTrustedHtml = Api.linkify(Api.trustedHTML('Please go to www.younow.com!'));
        var singleLink = Api.linkify('younow.com');
        var multipleLinks = Api.linkify('younow.com and google.com');
        var htmlAfter = Api.linkify('www.younow.com <span></span>');
        expect(noText).toBeUndefined();
        expect(previouslyTrustedHtml).toBe('Please go to <a href="http://www.younow.com" target="_blank" rel="nofollow">www.younow.com</a>!')
        expect(singleLink).toBe('<a href="http://younow.com" target="_blank" rel="nofollow">younow.com</a>');
        expect(multipleLinks).toBe('<a href="http://younow.com" target="_blank" rel="nofollow">younow.com</a> and <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>');
        expect(htmlAfter).toBe('<a href="http://www.younow.com" target="_blank" rel="nofollow">www.younow.com</a> <span></span>');
    });

    it('should linkify the following link types', function() {
        var co = Api.linkify('http://apple.co/1lnBCY2');
        var com = Api.linkify('http://www.test.com');
        var au = Api.linkify('http://test.com.au');
        var uk = Api.linkify('http://test.com.uk');
        var ly = Api.linkify('http://123bit.ly');
        var net = Api.linkify('http://test.net');
        var org = Api.linkify('http://test.org');
        var me = Api.linkify('http://test.me/1lnBCY2');
        var nz = Api.linkify('http://test.nz');
        var tv = Api.linkify('http://test.tv');
        var gl = Api.linkify('http://test.gl');
        var info = Api.linkify('http://test.info');
        var it = Api.linkify('www.smarturl.it/MNDeluxe');
        expect(co).toBe('<a href="http://apple.co/1lnBCY2" target="_blank" rel="nofollow">http://apple.co/1lnBCY2</a>');
        expect(com).toBe('<a href="http://www.test.com" target="_blank" rel="nofollow">http://www.test.com</a>');
        expect(au).toBe('<a href="http://test.com.au" target="_blank" rel="nofollow">http://test.com.au</a>');
        expect(uk).toBe('<a href="http://test.com.uk" target="_blank" rel="nofollow">http://test.com.uk</a>');
        expect(ly).toBe('<a href="http://123bit.ly" target="_blank" rel="nofollow">http://123bit.ly</a>');
        expect(net).toBe('<a href="http://test.net" target="_blank" rel="nofollow">http://test.net</a>');
        expect(org).toBe('<a href="http://test.org" target="_blank" rel="nofollow">http://test.org</a>');
        expect(me).toBe('<a href="http://test.me/1lnBCY2" target="_blank" rel="nofollow">http://test.me/1lnBCY2</a>');
        expect(nz).toBe('<a href="http://test.nz" target="_blank" rel="nofollow">http://test.nz</a>');
        expect(tv).toBe('<a href="http://test.tv" target="_blank" rel="nofollow">http://test.tv</a>');
        expect(gl).toBe('<a href="http://test.gl" target="_blank" rel="nofollow">http://test.gl</a>');
        expect(info).toBe('<a href="http://test.info" target="_blank" rel="nofollow">http://test.info</a>');
        expect(it).toBe('<a href="http://www.smarturl.it/MNDeluxe" target="_blank" rel="nofollow">www.smarturl.it/MNDeluxe</a>');
    });

    it('should strip html', function() {
        var html = Api.stripHTML('<div>strip the divs</div>');
        var nohtml = Api.stripHTML('no need to strip');
        expect(html).toBe('strip the divs');
        expect(nohtml).toBe('no need to strip');
    });

    it('should prepare the description given', function() {
        var noDescription = Api.prepareDescription();
        var description = Api.prepareDescription('Description in here');
        var descriptionWithLinks = Api.prepareDescription('Go to www.younow.com for a description');
        expect(noDescription.$$unwrapTrustedValue()).toBe('This profile does not have a description');
        expect(description.$$unwrapTrustedValue()).toBe('Description in here');
        expect(descriptionWithLinks.$$unwrapTrustedValue()).toBe('Go to <a href="http://www.younow.com" target="_blank" rel="nofollow">www.younow.com</a> for a description');
    })

    it('should go to a specified path', function() {
        var noPath = Api.goto();
        expect(noPath).toBe(false);
        var normalPath = Api.goto('www.google.com');
        expect($location.path()).toBe('/www.google.com');
        var hostPath = Api.goto('http://www.google.com');
        expect($location.path()).not.toBe('http://www.google.com');
        expect($location.path()).toBe('/www.google.com');
    })

    it('should correctly format numbers', function() {
        var billion = Api.squashedNumber(1000000000, 1);
        var billionDecimal = Api.squashedNumber(1800000000, 9);
        var million = Api.squashedNumber(1000000, 1);
        var millionDecimal = Api.squashedNumber(1600000, 6);
        var thousand = Api.squashedNumber(1200, 1);
        var thousandDecimal = Api.squashedNumber(1200, 3);
        var hundred = Api.squashedNumber(100, 1);
        var noNum = Api.squashedNumber();
        expect(billion).toBe('1B');
        expect(billionDecimal).toBe('1.8B')
        expect(million).toBe('1M');
        expect(millionDecimal).toBe('1.6M');
        expect(thousand).toBe('1k');
        expect(thousandDecimal).toBe('1.2k');
        expect(hundred).toBe('100');
        expect(noNum).toBe('');
    })

    it('should sort an object alphanumerically', function() {
        var object = {
            'c': 3,
            'b': 2,
            'e': 5,
            'd': 4,
            'a': 1
        };
        var sorted = Api.sortObject(object);
        var key, i = 0;

        for (key in sorted) {
            i++;
            expect(sorted[key] === i).toBeTruthy();
        }
    })

    it('should store/remove data in localstorage', function() {
        Api.store('someValue', 'value');
        expect(window.localStorage.someValue).toBe('value');
        Api.store('someValue', null);
        expect(window.localStorage.someValue).toBeUndefined();
    });

    it('should convert an array to an object', function() {
        var array = ['some', 'strings', 'in here'];
        var object = Api.ArrayToObject(array);
        expect(Array.isArray(array)).toBeTruthy();
        expect(Array.isArray(object)).toBeFalsy();
        expect(typeof object).toBe('object');
    });

    it('should generate a unique id', function() {
        var uniqueId1 = Api.generateTrackingId();
        var uniqueId2 = Api.generateTrackingId();
        expect(uniqueId1).not.toBe(uniqueId2);
    });

    it('should choose an object from an array of objects quasi randomly', function() {
        var split = Api.splitter({
            50: 'control',
            100: 'variation'
        });
        expect(split).toBeDefined();
        if(split == 'control') {
            expect(split).toBe('control');
        }
        if(split == 'variation') {
            expect(split).toBe('variation');
        }
    });

    it('should choose an object from an array of objects quasi randomly', function() {
        var split = Api.splitter({
            50: 'control',
            100: 'variation'
        });
        expect(split).toBeDefined();
        if(split == 'control') {
            expect(split).toBe('control');
        }
        if(split == 'variation') {
            expect(split).toBe('variation');
        }
    });

    // it('should set up a poll', function() {
    //     var polled = {
    //         times: 0
    //     };
    //     var callback = function() {
    //         polled.times++;
    //     };
    //     Api.poll(callback, 'testPoll', 1);
    //     expect(Api.polls.testPoll).toBeDefined();
    //
    //     jasmine.Clock.useMock();
    //
    //     jasmine.Clock.tick(2000);
    //
    //     expect(polled.times).toBe(1);
    // });

    // it('should serialize an object', function() {
    // });

    it('should add a property to a specific stack for bugsnag tracking', function() {
        $window.bugsnagAdditionalParams = {
            testStack: []
        };
        Api.addToStack({test: 'test data'}, 'testStack');
        expect($window.bugsnagAdditionalParams.testStack).toBeDefined();
        expect($window.bugsnagAdditionalParams.testStack.length).toBe(1);
    });

    it('should get the linkType', function() {
        var root = Api.getLinkType('/', $window.location.search);
        var yozio = Api.getLinkType('/ps1', '?yozio');
        var search = Api.getLinkType('/explore', '?q=');
        var explore = Api.getLinkType('/explore', $window.location.search);
        var tag = Api.getLinkType('/explore/guys', $window.location.search);
        var info = Api.getLinkType('/info/en/:doc', $window.location.search);
        var policy = Api.getLinkType('/policy/en/:doc', $window.location.search);
        var thankYou = Api.getLinkType('/thankyou', $window.location.search);
        var featured = Api.getLinkType('/featured', $window.location.search);
        var profile = Api.getLinkType('/ps1/channel', $window.location.search);
        var policy = Api.getLinkType('/policy/en/:doc', $window.location.search);

        expect(root).toBe('root');
        expect(yozio).toBe('yozio');
        expect(search).toBe('search');
        expect(explore).toBe('explore');
        expect(tag).toBe('tag');
        expect(info).toBe('info');
        expect(policy).toBe('policy');
        expect(thankYou).toBe('thankyou');
        expect(featured).toBe('featured');
        expect(profile).toBe('profile');
        expect(policy).toBe('policy');

        // missing the catch all and the entity types
    });

    it('should get the linkTerm', function() {
        var search = Api.getLinkTerm('/explore', '?q=test', 'search');

        expect(search).toBe('test');
        // expect(info).toBe('info');
        // expect(policy).toBe('policy');
        // expect(tag).toBe('tag');
        // expect(featured).toBe('featured');
        // expect(profile).toBe('profile');
        // expect(broadcast).toBe('broadcast');
        // expect(comment).toBe('comment');
        // expect(post).toBe('post');
    });

    // it('should get the referrer', function() {
        // document.referrer = 'www.facebook.com'
        // var referrer = Api.getReferrer();
        // expect(referrer).not.toBe('facebook');
        // document.referrer
        // var twitter = "t.co/";
    // });
    //
    // it('should get the referrer path', function() {
    // });

    it('should build the tracking pixel url properly', function() {
        var params = ['EVENT', undefined, undefined, 'Exy7AbML3P', 100501, 755225, 50, 1, 1000, 1, 'PING', 100, 1, 3, undefined, 'xyZ109P1pO', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 'trpx.png'];
        var trpxUrl = Api.buildPixelTracking(params);
        expect(trpxUrl).toBeDefined();
        //must account for the host in the zeroith space
        expect(trpxUrl.split('/').length).toBe(24);
        expect(trpxUrl.split('/')[23]).toBe('trpx.png');
    });

    it('should build the tracking pixel with dynamic size', function() {
        var params = ['EVENT', 100, 1, 3, 'trpx.png'];
        var trpxUrl = Api.buildPixelTracking(params, 4);
        expect(trpxUrl).toBeDefined();
        expect(trpxUrl.split('/').length).toBe(4);
        expect(trpxUrl.split('/')[3]).toBe('trpx.png');
    });

    it('should not detect m edge if testing on chrome', function() {
        var isEdge = Api.isMEdge();
        expect(isEdge).toBeFalsy();
    });

    //=================================================================
    // Api.post
    //=================================================================
    it('should post requests using the config provided', function() {
        $httpBackend.expectPOST('http://www2-vd.younow.com/php/api/test').respond();

        var testPost = Api.post('test');

        $httpBackend.flush();

        expect(testPost.then).toBeDefined();
    });

    it('should post with data serialized in the url', function() {
        $httpBackend.expectPOST('http://www2-vd.younow.com/php/api/test').respond();
        $httpBackend.when('POST', 'http://www2-vd.younow.com/php/api/test', function(postData) {
            expect(postData).toBe('type=dummy&number=1');
        }).respond(200, true);

        var testPost = Api.post('test', {
            type: 'dummy',
            number: 1
        });

        $httpBackend.flush();

        expect(testPost.then).toBeDefined();
    });
    

    it('should post securely using https', function() {
        $httpBackend.expectPOST('https://www2-vd.younow.com/php/api/test').respond();

        var testPost = Api.post('test', undefined, true);

        $httpBackend.flush();

        expect(testPost.then).toBeDefined();
    });

    it('should post with a custom base url by passing a full url', function() {
        $httpBackend.expectPOST('http://www.younow.com/php/test').respond();

        var testPost = Api.post('test', undefined, false, 'http://www.younow.com/php/test');

        $httpBackend.flush();

        expect(testPost.then).toBeDefined();
    });

    it('should post with no serialize params', function() {
        $httpBackend.expectPOST('http://www2-vd.younow.com/php/api/test').respond();
        $httpBackend.when('POST', 'http://www2-vd.younow.com/php/api/test', function(postData) {
            expect(postData).toBe('{"param1":"hi","param2":"hello"}');
        }).respond(200, true);

        var testPost = Api.post('test', {param1:'hi',param2:'hello'}, undefined, undefined, true);

        $httpBackend.flush();

        expect(testPost.then).toBeDefined();
    });

    //=================================================================
    // Api.get
    //=================================================================
    it('should do a get request', function() {
        $httpBackend.expectGET('http://www2-vd.younow.com/php/api/test').respond();

        var testPost = Api.get('test');

        $httpBackend.flush();

        expect(testPost.then).toBeDefined();
    });

    it('should do a get request with data serialized', function() {
        $httpBackend.expectGET('http://www2-vd.younow.com/php/api/test/type=get/number=1').respond();

        var testPost = Api.get('test', {
            type: 'get',
            number: 1
        });

        $httpBackend.flush();

        expect(testPost.then).toBeDefined();
    });

    it('should do a get to the cdn using the cdn node', function() {
        $httpBackend.expectGET('http://cdn2-vd.younow.com/php/api/test').respond();

        var testPost = Api.get('test', undefined, true);

        $httpBackend.flush();

        expect(testPost.then).toBeDefined();
    });

    it('should do a secure https get request', function() {
        $httpBackend.expectGET('https://www2-vd.younow.com/php/api/test').respond();

        var testPost = Api.get('test', undefined, false, true);

        $httpBackend.flush();

        expect(testPost.then).toBeDefined();
    });

    it('should do a JSONP get request if the host is live', function() {
        config.params.host = 'www.younow.com';
        $httpBackend.expectJSONP('http://www2-vd.younow.com/php/api/test/callback=JSON_CALLBACK').respond();

        var testPost = Api.get('test');

        $httpBackend.flush();

        expect(testPost.then).toBeDefined();
    });
});
