import React from 'react'

export default function Modal() {
    return (
        <>
            {/* <!--Search Filter Modal --> */}
            <div className="modal fade searchfilter_Modal" id="searchfilterModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Search</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="search_filter_field">
                                <div className="col-lg-12">
                                    <h3 className="page_title new_h">Category Name</h3>
                                    <div className="inputFields" style="width: 320px;">
                                        <input type="text" placeholder="Category Name" />

                                    </div>
                                </div>
                                <h3 className="page_title">Basics</h3>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="SelectField">
                                            <select className="check-box-none" data-placeholder="Gender">
                                                <option value="" disabled selected>Gender</option>
                                                <option value="1">Male</option>
                                                <option value="2">Female</option>
                                                <option value="4">Transgender Female</option>
                                                <option value="3">Transgender Male</option>
                                                <option value="5">Non-binary / Genderqueer / Gender Fluid</option>
                                                <option value="6">Two Spirit</option>
                                                <option value="7">Prefer to self-describe</option>
                                                <option value="8">Prefer not to say</option>
                                            </select>
                                            <span className="star_icon"><img src="/assets/images/star.png" alt="" /></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="inputField_height">
                                            <div className="inputField_height_ft">
                                                <input type="number" placeholder="Age" />
                                                <span className="input_bg">min</span>
                                            </div>
                                            <div className="inputField_height_ft">
                                                <input type="number" placeholder="Age" />
                                                <span className="input_bg">max</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="SelectField">
                                            <select className="js-example-basic-hide-search-multi" multiple="multiple" id="stg" data-placeholder="Stage of Life">
                                                <option value="1">Still in school</option>
                                                <option value="2">Grinding at work</option>
                                                <option value="3">Figuring myself out</option>
                                                <option value="4">Married</option>
                                                <option value="5">Has Kid(s)</option>
                                                <option value="6">Living Life</option>
                                                <option value="7">Single</option>
                                            </select>
                                            <span className="star_icon"><img src="/assets/images/star.png" alt="" /></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="SelectField">
                                            <select className="check-box-none" data-placeholder="Religion">
                                                <option value="" disabled selected>Religion</option>
                                                <option value="1">Agnostic</option>
                                                <option value="2">Atheist</option>
                                                <option value="3">Buddhist</option>
                                                <option value="4">Catholic</option>
                                                <option value="5">Christian</option>
                                                <option value="6">Hindu</option>
                                                <option value="7">Jewish</option>
                                                <option value="8">Muslim</option>
                                                <option value="8">Sikh</option>
                                                <option value="8">Spiritual</option>
                                                <option value="8">Other</option>
                                                <option value="8">Prefer not to say</option>
                                            </select>
                                            <span className="star_icon"><img src="/assets/images/star.png" alt="" /></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="inputFields">
                                            <input type="text" placeholder="Current City" />
                                            <span className="star_icon"><img src="/assets/images/star.png" alt="" /></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="inputFields">
                                            <input type="email" placeholder="Email Address" />
                                            <span className="star_icon"><img src="/assets/images/star.png" alt="" /></span>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="page_title">Career</h3>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="inputFields">
                                            <input type="text" placeholder="School" />
                                            <span className="star_icon"><img src="/assets/images/star.png" alt="" /></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="inputFields">
                                            <input type="text" placeholder="Job" />
                                            <span className="star_icon"><img src="/assets/images/star.png" alt="" /></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="inputFields">
                                            <input type="text" placeholder="Company" />
                                            <span className="star_icon"><img src="/assets/images/star.png" alt="" /></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="SelectField">
                                            <select className="js-example-basic-hide-search-multi" multiple="multiple" id="reg" data-placeholder="Income">
                                                <option value="1">0-50,000</option>
                                                <option value="2">50,000-100,000</option>
                                                <option value="3">100,000-200,000</option>
                                                <option value="4">200,000-400,000</option>
                                                <option value="5">400,000-1,000,000</option>
                                                <option value="6">1,000,000+</option>
                                                <option value="8">Prefer not to say</option>
                                            </select>
                                            <span className="star_icon"><img src="/assets/images/star.png" alt="" /></span>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="page_title">Physical</h3>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="inputField_height">
                                            <div className="inputField_height_ft">
                                                <input type="number" placeholder="Height" />
                                                <span className="input_bg">ft</span>
                                            </div>
                                            <div className="inputField_height_ft">
                                                <input type="number" placeholder="Height" />
                                                <span className="input_bg">inch</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="inputField_height">
                                            <div className="inputField_height_ft">
                                                <input type="number" placeholder="Weight" />
                                                <span className="input_bg">min</span>
                                            </div>
                                            <div className="inputField_height_ft">
                                                <input type="number" placeholder="Weight" />
                                                <span className="input_bg">max</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="SelectField">
                                            <select className="js-example-basic-hide-search-multi" multiple="multiple" id="rac" data-placeholder="Race">
                                                <option value="1">Hispanic or Latino</option>
                                                <option value="2">American Indian or Alaskan Native</option>
                                                <option value="3">Asian</option>
                                                <option value="4">Native Hawaiian or Other Pacific Islander</option>
                                                <option value="5">Black or African American</option>
                                                <option value="6">White</option>
                                            </select>
                                            <span className="star_icon"><img src="/assets/images/star.png" alt="" /></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="SelectField">
                                            <select className="check-box-none" id="eye" data-placeholder="Eye Colour">
                                                <option value="" disabled selected>Eye Colour</option>
                                                <option value="1">Amber</option>
                                                <option value="2">Blue</option>
                                                <option value="3">Brown</option>
                                                <option value="4">Gray</option>
                                                <option value="5">Green</option>
                                                <option value="6">Hazel</option>
                                                <option value="7">Red</option>
                                            </select>
                                            <span className="star_icon"><img src="/assets/images/star.png" alt="" /></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="SelectField">
                                            <select className="check-box-none" id="hai" data-placeholder="Hair Color">
                                                <option value="" disabled selected>Hair Color</option>
                                                <option value="1">Blonde</option>
                                                <option value="2">Brown</option>
                                                <option value="3">Red</option>
                                                <option value="4">Black</option>
                                                <option value="5">White</option>
                                                <option value="6">Gray</option>
                                                <option value="7">Other</option>
                                            </select>
                                            <span className="star_icon"><img src="/assets/images/star.png" alt="" /></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="SelectField">
                                            <select className="js-example-basic-hide-search-multi" multiple="multiple" id="bod" data-placeholder="Body Type (Scale)">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">Prefer not to say</option>
                                            </select>
                                            <span className="star_icon"><img src="/assets/images/star.png" alt="" /></span>

                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="SelectField">
                                            <a href="javascript:void(0)" className="cta" data-bs-toggle="modal" data-bs-target="#bodyscale" style="display: flex; justify-content: center;">View body type scale</a>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="page_title">Personality</h3>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="SelectField">
                                            <select className="check-box-none" id="per" data-placeholder="Personality Type">
                                                <option value="" disabled selected>Personality Type</option>
                                                <option value="1">INTJ</option>
                                                <option value="2">INTP</option>
                                                <option value="3">ENTJ</option>
                                                <option value="4">ENTP</option>
                                                <option value="5">INFJ</option>
                                                <option value="6">INFP</option>
                                                <option value="7">ENFJ</option>
                                                <option value="8">ENFP</option>
                                                <option value="9">ISTJ</option>
                                                <option value="10">ISFJ</option>
                                                <option value="11">ESTJ</option>
                                                <option value="12">ESFJ</option>
                                                <option value="13">ISTP</option>
                                                <option value="14">ESTP</option>
                                                <option value="15">ESFP</option>
                                            </select>
                                            <span className="star_icon"><img src="/assets/images/star.png" alt="" /></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="SelectField">
                                            <select className="check-box-none" id="mgi" data-placeholder="Morning / Night">
                                                <option value="" disabled selected>Morning / Night</option>
                                                <option value="1">Morning</option>
                                                <option value="2">Night</option>
                                            </select>
                                            <span className="star_icon"><img src="/assets/images/star.png" alt="" /></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="SelectField">
                                            <select className="check-box-none" id="int" data-placeholder="Introverted / Extroveted">
                                                <option value="" disabled selected>Introverted / Extroveted</option>
                                                <option value="1">Introverted</option>
                                                <option value="2">Extroverted</option>
                                            </select>
                                            <span className="star_icon"><img src="/assets/images/star.png" alt="" /></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 emoji_sect">
                                        <label for="">Enter your 3 favorite emojis </label>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="inputFields">
                                                    <span className=""><img src="/assets/images/smile.png" alt="" /></span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="inputFields">
                                                    <span className=""><img src="/assets/images/face-smile-hearts.png" alt="" /></span>

                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="inputFields">
                                                    <span className=""><img src="/assets/images/sad.png" alt="" /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="SelectField">
                                            <select className="js-example-basic-hide-search-multi" multiple="multiple" id="idr" data-placeholder="Ideal Relationship D8">
                                                <option value="1">Breakfast</option>
                                                <option value="2">Lunch</option>
                                                <option value="3">Dinner</option>
                                                <option value="4">Grabbing coffee</option>
                                                <option value="5">Grabbing a drink</option>
                                                <option value="6">Smoke sesh</option>
                                                <option value="7">Netflix and chill</option>
                                                <option value="8">Walk in the park</option>
                                                <option value="9">Movie theatre</option>
                                                <option value="10">Board games/cards</option>
                                                <option value="11">Playing/Listening to music</option>
                                                <option value="12">Meetup at a party</option>
                                                <option value="13">Group Hangout</option>
                                                <option value="14">Other</option>
                                            </select>
                                            <span className="star_icon"><img src="/assets/images/star.png" alt="" /></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="SelectField">
                                            <select className="js-example-basic-hide-search-multi" multiple="multiple" id="idd" data-placeholder="Ideal Friendship D8">
                                                <option value="1">Getting your nails done</option>
                                                <option value="2">Wine night</option>
                                                <option value="3">Movie theatre</option>
                                                <option value="4">TV show/movie marathon</option>
                                                <option value="5">Playing a sport</option>
                                                <option value="6">Grabbing coffee</option>
                                                <option value="7">Grabbing a drink</option>
                                                <option value="8">Smoke sesh</option>
                                                <option value="9">Lunch</option>
                                                <option value="10">Dinner</option>
                                                <option value="11">Meetup at a party</option>
                                                <option value="12">Walk in the park</option>
                                                <option value="13">Board games/cards</option>
                                                <option value="14">Playing/Listening to music</option>
                                                <option value="15">Group Hangout</option>
                                                <option value="16">Other</option>
                                            </select>
                                            <span className="star_icon"><img src="/assets/images/star.png" alt="" /></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="SelectField">
                                            <select className="check-box-none" id="fdi" data-placeholder="Friendship Intent">
                                                <option value="" disabled selected>Friendship Intent</option>
                                                <option value="1">Looking to meet new people</option>
                                                <option value="2">Looking to meet someone just like me</option>
                                                <option value="3">Looking to make a best friend</option>
                                                <option value="4">Not kooking to make new friends but intrested in meeting new people</option>
                                                <option value="5">Intrested in using xcelerando in other ways</option>
                                                <option value="6">Not looking</option>
                                            </select>
                                            <span className="star_icon"><img src="/assets/images/star.png" alt="" /></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="SelectField">
                                            <select className="check-box-none" id="rel" data-placeholder="Relationship Intent">
                                                <option value="" disabled selected>Relationship Intent</option>
                                                <option value="1">Looking to have fun</option>
                                                <option value="2">Not necessarily looking for anything serious but am open to seeing where things go</option>
                                                <option value="3">Looking for boy/girl friend</option>
                                                <option value="4">Looking for settle down</option>
                                                <option value="5">Polygamous</option>
                                                <option value="6">Exploring my identity</option>
                                                <option value="7">Not looking</option>
                                            </select>
                                            <span className="star_icon"><img src="/assets/images/star.png" alt="" /></span>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="page_title">The Tea</h3>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="inputFields">
                                            <input type="text" placeholder="Interest" />
                                            <span className="star_icon"><img src="/assets/images/star.png" alt="" /></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="SelectField">
                                            <select className="js-example-basic-hide-search-multi" multiple="multiple" id="rsb" data-placeholder="Recreational Substances">
                                                <option value="1">Weed</option>
                                                <option value="2">Alcohol</option>
                                                <option value="3">Cocaine</option>
                                                <option value="4">Acid</option>
                                                <option value="5">MDMA</option>
                                                <option value="6">Heroine</option>
                                                <option value="7">Meth</option>
                                                <option value="8">Other</option>
                                            </select>
                                            <span className="star_icon"><img src="/assets/images/star.png" alt="" /></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="inputFields">
                                            <input type="text" placeholder="Music" />
                                            <span className="star_icon"><img src="/assets/images/star.png" alt="" /></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="inputFields">
                                            <input type="text" placeholder="TV / Movies" />
                                            <span className="star_icon"><img src="/assets/images/star.png" alt="" /></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="inputFields">
                                            <input type="text" placeholder="Comedians" />
                                            <span className="star_icon"><img src="/assets/images/star.png" alt="" /></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="inputFields">
                                            <input type="text" placeholder="Sports Teams" />
                                            <span className="star_icon"><img src="/assets/images/star.png" alt="" /></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="inputFields">
                                            <input type="text" placeholder="Cities Visited / Lived" />
                                            <span className="star_icon"><img src="/assets/images/star.png" alt="" /></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="SelectField">
                                            <select className="check-box-none" id="pol" data-placeholder="Politics">
                                                <option value="" disabled selected>Politics</option>
                                                <option value="1">Democratic</option>
                                                <option value="2">Republican</option>
                                                <option value="3">Independent</option>
                                                <option value="5">Other</option>
                                                <option value="4">Hate Politics</option>
                                            </select>
                                            <span className="star_icon"><img src="/assets/images/star.png" alt="" /></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="SelectField">
                                            <select className="check-box-none" data-placeholder="Sexuality">
                                                <option value="" disabled selected>Sexuality</option>
                                                <option value="1">Straight</option>
                                                <option value="2">Gay</option>
                                                <option value="3">Bisexual</option>
                                                <option value="4">Asexual</option>
                                            </select>
                                            <span className="star_icon"><img src="/assets/images/star.png" alt="" /></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="SelectField">
                                            <select className="check-box-none" id="room" data-placeholder="Looking for Roommates">
                                                <option value="" disabled selected>Looking for Roommates</option>
                                                <option value="1">Yes</option>
                                                <option value="2">No</option>
                                            </select>
                                            <span className="star_icon"><img src="/assets/images/star.png" alt="" /></span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 search-now-btn">
                                            <a href="search-result.php" className="cta"><span><i className="fa-solid fa-magnifying-glass" style="color: #ffffff;"></i></span>Search Now</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Delete Modal --> */}
            <div className="modal fade delete_Modal" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body">
                            <div className="addCard_modal">
                                <form action="">
                                    <div className="row deleteRow">
                                        <p className="paragraph">Are you sure you want to delete Albert Flores?</p>
                                        <div className="col-6 btnSection">
                                            <button type="submit" className="cta">Yes, Delete</button>
                                        </div>
                                        <div className="col-6 btnSection">
                                            <button type="submit" className="cta cta2">No</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Block Modal --> */}
            <div className="modal fade delete_Modal" id="blockModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body">
                            <div className="addCard_modal">
                                <form action="">
                                    <div className="row deleteRow">
                                        <p className="paragraph">Are you sure you want to block Albert Flores?</p>
                                        <div className="col-6 btnSection">
                                            <button type="submit" className="cta">Yes, Block</button>
                                        </div>
                                        <div className="col-6 btnSection">
                                            <button type="submit" className="cta cta2">No</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="modal fade escape_Modal" id="paymentModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Payment Detail</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="inputFields">
                                            <input type="text" placeholder="Card holder name" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="inputFields">
                                            <input type="text" placeholder="Card number" />
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="inputFields">
                                            <input type="text" placeholder="Exp date" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="inputFields">
                                            <input type="text" placeholder="CVV" />
                                        </div>
                                    </div>
                                    <div className="col-12 escape_content mt-3">
                                        <div className="btnSect">
                                            <a href="javascript:void(0)" className="cta">Pay now</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Notification Modal --> */}
            <div className="modal fade escape_Modal" id="notifiactionModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Notification</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="notification_content">
                                <div className="notifications">
                                    <div className="d_flexSpacebetween">
                                        <p className="semiBold">lorem ipsum dollar set</p>
                                        <p><small>2 hrs ago</small></p>
                                    </div>
                                    <p className="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, dolores blanditiis tenetur aliquam ab nemo. Beatae magni impedit error fuga.</p>
                                </div>
                                <div className="notifications">
                                    <div className="d_flexSpacebetween">
                                        <p className="semiBold">lorem ipsum dollar set</p>
                                        <p><small>2 hrs ago</small></p>
                                    </div>
                                    <p className="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, dolores blanditiis tenetur aliquam ab nemo. Beatae magni impedit error fuga.</p>
                                </div>
                                <div className="notifications">
                                    <div className="d_flexSpacebetween">
                                        <p className="semiBold">lorem ipsum dollar set</p>
                                        <p><small>2 hrs ago</small></p>
                                    </div>
                                    <p className="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, dolores blanditiis tenetur aliquam ab nemo. Beatae magni impedit error fuga.</p>
                                </div>
                                <div className="notifications">
                                    <div className="d_flexSpacebetween">
                                        <p className="semiBold">lorem ipsum dollar set</p>
                                        <p><small>2 hrs ago</small></p>
                                    </div>
                                    <p className="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, dolores blanditiis tenetur aliquam ab nemo. Beatae magni impedit error fuga.</p>
                                </div>
                                <div className="notifications">
                                    <div className="d_flexSpacebetween">
                                        <p className="semiBold">lorem ipsum dollar set</p>
                                        <p><small>2 hrs ago</small></p>
                                    </div>
                                    <p className="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, dolores blanditiis tenetur aliquam ab nemo. Beatae magni impedit error fuga.</p>
                                </div>
                                <div className="notifications">
                                    <div className="d_flexSpacebetween">
                                        <p className="semiBold">lorem ipsum dollar set</p>
                                        <p><small>2 hrs ago</small></p>
                                    </div>
                                    <p className="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, dolores blanditiis tenetur aliquam ab nemo. Beatae magni impedit error fuga.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!-- Profile left Sect --> */}
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">User Profile</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="sideBar_profile">
                        <div className="member_desc d_flexStart">
                            <div className="member_descLeft">
                                <div className="memberProfile">
                                    <img src="/assets/images/member_detailProfile.png" alt="" />
                                </div>
                            </div>
                            <div className="member_descRight">
                                <div className="member_info d_flexStartBetween">
                                    <div className="member_infoLeft">
                                        <p className="member_name">Albert Flores</p>
                                        <p className="desc">23 years old</p>
                                        <p className="desc">New York, United State</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="member_description">
                            <p className="titleBold">BIO / Description</p>
                            <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum eleifend leo, quis ullamcorper est eleifend sit amet. </p>
                        </div>
                        <div className="member_basicInfo">
                            <div className="member_basicInfo_title">
                                <div className="d_flexSpacebetween">
                                    <p className="titleBold">Basics</p>

                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Name</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Date of Birth</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Gender Identity</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Stage of Life</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Religion</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Current City</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Religion</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                            </div>
                            <div className="member_basicInfo_title">
                                <div className="d_flexSpacebetween">
                                    <p className="titleBold">Career</p>

                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">School (s)</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Job</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Company</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Income</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                            </div>
                            <div className="member_basicInfo_title">
                                <div className="d_flexSpacebetween">
                                    <p className="titleBold">Physical</p>

                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Height</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Weight</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Ethnicity</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Eye Color</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Hair Color</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Body Type</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                            </div>
                            <div className="member_basicInfo_title">
                                <div className="d_flexSpacebetween">
                                    <p className="titleBold">Personality</p>

                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Personality Type</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">What do you like?</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">What are you?</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Enter your 3 favorite emojis</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Ideal relationship D8</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Ideal Friend D8</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Relationship Intent</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Friend Intent</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                            </div>
                            <div className="member_basicInfo_title">
                                <div className="d_flexSpacebetween">
                                    <p className="titleBold">The Tea</p>

                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Interest</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Drugs / Alcohol</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Music</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">TV / Movies</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Comedians</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Sports Teams</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Cities Visited / Lived</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Politics</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Sexuality</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">BIO / Description</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                                <div className="member_basicInfo_row d_flexStart">
                                    <div className="memberbasicInfo_rowLeft">
                                        <p className="semiBold">Looking for Roommates</p>
                                    </div>
                                    <div className="memberbasicInfo_rowRight">
                                        <p className="paragraph">Lorem ipsum </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Chat Screen1 Users Relationships --> */}
            <div className="offcanvas offcanvas-end" tabindex="-1" id="relationshipChats" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header d_flexCenterGap">
                    <h5 id="offcanvasRightLabel">Relationship</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="group_allchat">
                        <div className="all_users_tabs">
                            <div className="user_message_tabs d_flexStart">
                                <div className="user_img">
                                    <img src="/assets/images/user_img1.png" alt="" />
                                </div>
                                <div className="user_details">
                                    <p className="user_title">Relashionship</p>
                                    <p className="user_desc">18 Members</p>
                                </div>
                            </div>
                            <div className="user_message_tabs user_message_tabs_active d_flexStart">
                                <div className="user_img">
                                    <img src="/assets/images/user_img6.png" alt="" />
                                </div>
                                <div className="user_details">
                                    <p className="user_title">Tennis Buddies</p>
                                    <p className="user_desc">15 Members</p>
                                </div>
                            </div>
                            <div className="user_message_tabs d_flexStart">
                                <div className="user_img">
                                    <img src="/assets/images/user_img3.png" alt="" />
                                </div>
                                <div className="user_details">
                                    <p className="user_title">Relashionship</p>
                                    <p className="user_desc">18 Members</p>
                                </div>
                            </div>
                            <div className="user_message_tabs d_flexStart">
                                <div className="user_img">
                                    <img src="/assets/images/user_img4.png" alt="" />
                                </div>
                                <div className="user_details">
                                    <p className="user_title">Relashionship</p>
                                    <p className="user_desc">18 Members</p>
                                </div>
                            </div>
                            <div className="user_message_tabs d_flexStart">
                                <div className="user_img">
                                    <img src="/assets/images/user_img5.png" alt="" />
                                </div>
                                <div className="user_details">
                                    <p className="user_title">Relashionship</p>
                                    <p className="user_desc">18 Members</p>
                                </div>
                            </div>
                        </div>
                        <div className="btn_sect">
                            <a href="javascript:void(0)" className="cta" data-bs-toggle="modal" data-bs-target="#searchfilterModal"><img src="/assets/images/add.png" alt="" /> Add a Category </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Chat Screen1 Users Tennisbudies --> */}
            <div className="offcanvas offcanvas-end" tabindex="-1" id="Tennisbudieschats" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header d_flexCenterGap">
                    <h5 id="offcanvasRightLabel">Tennisbuddies</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="chat_all_users">
                        <div className="message_section d_flexStartBetween">
                            <div>
                                <p className="semiBold">Tennis Buddies</p>
                                <p className="user_desc">18 Members</p>
                            </div>
                            <div className="msgattachment">
                                <a href="javascript:void(0)" className="viewmoredetail menu-dots"><img src="/assets/images/menu-dots.png" alt="" /></a>
                                <div className="viewmore_detail2">
                                    <ul>
                                        <li className="account_detailList">
                                            <a href="member-profile.php">Add/Remove Members</a>
                                        </li>
                                        <li className="account_detailList">
                                            <a href="">Edit Group Name</a>
                                        </li>
                                        <li className="account_detailList">
                                            <a href="">Delete Group</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="messages_search">
                            <input type="text" placeholder="Search here..." />
                        </div>
                        <div className="allUser_msgs">
                            <div className="user_message_tabs d_flexStart">
                                <div className="user_img">
                                    <img src="/assets/images/user_img1.png" alt="" />
                                </div>
                                <div className="user_details">
                                    <p className="user_title">Relashionship</p>
                                    <p className="user_desc">18 Members</p>
                                </div>
                            </div>
                            <div className="user_message_tabs d_flexStart">
                                <div className="user_img">
                                    <img src="/assets/images/user_img6.png" alt="" />
                                </div>
                                <div className="user_details">
                                    <p className="user_title">Relashionship</p>
                                    <p className="user_desc">18 Members</p>
                                </div>
                            </div>
                            <div className="user_message_tabs user_message_tabs_active d_flexStart">
                                <div className="user_img">
                                    <img src="/assets/images/user_img3.png" alt="" />
                                </div>
                                <div className="user_details">
                                    <p className="user_title">Relashionship</p>
                                    <p className="user_desc">18 Members</p>
                                </div>
                            </div>
                            <div className="user_message_tabs d_flexStart">
                                <div className="user_img">
                                    <img src="/assets/images/user_img4.png" alt="" />
                                </div>
                                <div className="user_details">
                                    <p className="user_title">Relashionship</p>
                                    <p className="user_desc">18 Members</p>
                                </div>
                            </div>
                            <div className="user_message_tabs d_flexStart">
                                <div className="user_img">
                                    <img src="/assets/images/user_img5.png" alt="" />
                                </div>
                                <div className="user_details">
                                    <p className="user_title">Relashionship</p>
                                    <p className="user_desc">18 Members</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Block Modal --> */}
            <div className="modal fade body_scale_Modal" id="bodyscale" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content" style="width:auto; margin:0 auto;">
                        <div className="modal-body">
                            <div className="body_scale">
                                <p className="desc">Body Type Scale (1 to 7)</p>
                                <div>
                                    <img src="/assets/images/body_scale.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
