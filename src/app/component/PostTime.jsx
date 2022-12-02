import * as moment from 'jalali-moment';

function PostTime({ date }) {
    const m = moment()
    m.locale("fa")
    const momentDate = m.from(date, " ")

    return (
        <>
            <span title={momentDate}>&nbsp; <i>{momentDate} پیش </i></span>
        </>
    );
}

export default PostTime;