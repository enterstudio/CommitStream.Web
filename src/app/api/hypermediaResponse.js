(function(hypermediaResponse) {

  hypermediaResponse.digestPOST = function(protocol, host, digestId) {
    return {
      "_links": {
        "self" : { "href": protocol + "://" + host + "/api/digests/" + digestId }
        // This is a starter for when we get to inbox creation
        // ,
        // "inbox-create" : {  "href": protocol + "://" + host + "/api/digests/" + digestId + "/inbox",
        //                     "method": "POST",
        //                     "title": "Endpoint for creating an inbox for a repository on digest " + digestId }
        // }
      }
    };
  }

  // // THIS NEEDS TO BE CONVERTED TO PROPER HAL ONCE THE INBOX CREATION STORY IS PLAYED
  // hypermediaResponse.inbox = function(protocol, host, inboxId) {
  //   return {
  //             'id': inboxId,
  //             'inboxUrl': protocol + '://' + host + '/api/inbox/' + inboxId,
  //             '_links': [
  //             {
  //               'href': protocol + '://' + host + '/api/inbox',
  //               'rel': 'self'
  //             },
  //             {
  //                 'href' : protocol + '://' + host + '/api/digest/new',
  //                 'method': 'GET',
  //                 'description': 'Navigate to form for creating digest for a group of inboxes',
  //                 'rel': 'digest-form'
  //               }
  //             ]
  //          };
  // }

})(module.exports)