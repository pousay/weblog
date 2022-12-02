import Accordion from "react-bootstrap/Accordion";


function Questions() {
    return (
        <>
            <h2 className="h2"> سوالات متداول</h2>
            <Accordion>
                <Accordion.Item hidden eventKey="0">
                </Accordion.Item>


                <Accordion.Item eventKey="1">
                    <Accordion.Header >
                        چگونه میتوانم کامنت (نظر) بگذارم؟
                    </Accordion.Header>
                    <Accordion.Body>
                        متاسفانه وبلاگ ما هنوز بخش افزودن کامنت ندارد اما بزودی اضافه میشود و در دسترس همه کاربران قرار میگیرد.
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="2">
                    <Accordion.Header >
                        چگونه میتوانم پست بگذارم؟
                    </Accordion.Header>
                    <Accordion.Body>
                        افزودن پست فقط توسط مدیران و نویسندگان وبلاگ ممکن است.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        چگونه میتوانم یک نویسنده در وبلاگ شما باشم؟
                    </Accordion.Header>
                    <Accordion.Body>
                        وبلاگ ما هنوز بخش ثبت نام و وارد شدن را ندارد و فقط مدیران و نویسندگان قبلی میتوانند به بخش وارد شدن دسترسی داشته باشند.
                    </Accordion.Body>
                </Accordion.Item>



            </Accordion>
        </>
    );
}

export default Questions;