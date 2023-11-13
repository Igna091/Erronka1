    function showImage(imageNumber) {
        if (imageNumber === 1) {
            document.getElementById('before_after_1').style.display = 'block';
            document.getElementById('before_after_2').style.display = 'none';
            document.querySelector('.left').style.display = 'none';
            document.querySelector('.right').style.display = 'block';
        } else if (imageNumber === 2) {
            document.getElementById('before_after_1').style.display = 'none';
            document.getElementById('before_after_2').style.display = 'block';
            document.querySelector('.left').style.display = 'block';
            document.querySelector('.right').style.display = 'none';
        }
    }

    function showSupra(imageNum) {
    if (imageNum === 1) {
        document.getElementById('supra_before').style.display = 'block';
        document.getElementById('supra_after').style.display = 'none';
        document.querySelector('.left2').style.display = 'none';
        document.querySelector('.right2').style.display = 'block';
    } else if (imageNum === 2) {
        document.getElementById('supra_before').style.display = 'none';
        document.getElementById('supra_after').style.display = 'block';
        document.querySelector('.left2').style.display = 'block';
        document.querySelector('.right2').style.display = 'none';
    }
}