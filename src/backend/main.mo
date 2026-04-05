import Time "mo:core/Time";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Array "mo:core/Array";
import List "mo:core/List";
import Int "mo:core/Int";

actor {
  type Enquiry = {
    name : Text;
    email : Text;
    phone : Text;
    subject : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Enquiry {
    public func compare(enquiry1 : Enquiry, enquiry2 : Enquiry) : Order.Order {
      Int.compare(enquiry2.timestamp, enquiry1.timestamp);
    };
  };

  let inquiries = List.empty<Enquiry>();

  public shared ({ caller }) func submitEnquiry(name : Text, email : Text, phone : Text, subject : Text, message : Text) : async () {
    let enquiry : Enquiry = {
      name;
      email;
      phone;
      subject;
      message;
      timestamp = Time.now();
    };
    inquiries.add(enquiry);
  };

  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    inquiries.toArray().sort();
  };
};
