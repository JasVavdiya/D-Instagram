// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

contract Decentragram {
  string public name = "decentragram";

  //store Image
  uint public imageCount = 0;
  mapping(uint => Image) public images;

  struct Image {
    uint id;
    string imgHash;
    string description;
    uint tipAmount;
    address payable author;
  }

  event ImageCreated(
    uint id,
    string imgHash,
    string description,
    uint tipAmount,
    address payable author
  );

  event ImageTipped(
    uint id,
    string imgHash,
    string description,
    uint tipAmount,
    address payable author
  );

  //create Image
  function uploadImage(string memory _imgHash, string memory _description) public {

    //make sure uploader des. is exists
    require(bytes(_description).length > 0);

       //make sure uploader img is exists
    require(bytes(_imgHash).length > 0);

       //make sure uploader address is exists
    require(msg.sender!=address(0x0));


    imageCount++;

    //add image to contract
    images[imageCount] = Image(imageCount , _imgHash, _description, 0, msg.sender);

    //event triger
    emit ImageCreated(imageCount , _imgHash, _description, 0, msg.sender);
  }

  //tip Image 
  function tipImgOwner(uint _id) payable public{

    require(_id > 0 && _id <= imageCount);

    //fatch image
    Image memory _image = images[_id];

    //fatch author
    address payable _author = _image.author;

    // pay the author by sendeing them ether
    _author.transfer(msg.value);

      //increment in tip amount
    _image.tipAmount = _image.tipAmount + msg.value;

    //update the image 
    images[_id]  = _image;

    //event triger
    emit ImageTipped(_id , _image.imgHash, _image.description, _image.tipAmount, _author);

  }
 }