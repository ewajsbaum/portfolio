/*global $*/
(function () {
    'use strict';

    const availablePics = 21;
    let dragging = false;
    let offset;
    let layer = 0;
    let modal = $('#modal');
    let messageBox = $('#messageBox');
    let currentProject;
    let changes;

    messageBox.submit(e => {
        e.preventDefault();
        currentProject = $('#projectName').val();
        messageBox.slideUp();
        modal.hide();
        $('#bar').show();
        $('#name').text($('#playerName').val());
        $('#project').text(currentProject);

        startGame();
    });

    function startGame() {
        changes = JSON.parse(localStorage.getItem(currentProject)) || [];
        changes.forEach(part => {
            $(`<img class="part" src=${part.url}></img>`).appendTo('#left_side').css({ left: part.left, top: part.top, position: 'absolute' });
        });

        for (let i = 0; i < availablePics; i++) {
            $(`<img class="part" src="MPHparts/Picture${i + 1}.png"></img>`).appendTo('#left_side');
        }
    }

    $(document).on('mousedown', '.part', e => {
        dragging = $(e.target);
        offset = { y: e.offsetY, x: e.offsetX };
    }).mousemove(e => {
        if (dragging) {
            e.preventDefault();
            dragging.css({ position: 'absolute', top: e.pageY - offset.y, left: e.pageX - offset.x, zIndex: layer++ });
        }
    }).mouseup(() => {
        if (dragging) {
            $('#boing')[0].play();
            changes = $.grep(changes, function (x) {
                return (x.url !== dragging.attr('src'));
            });
            changes.push({ url: dragging.attr('src'), left: dragging.css('left'), top: dragging.css('top') });
            localStorage.setItem(currentProject, JSON.stringify(changes));
            dragging = false;
        }
    });

    $('#clear').click(() => {
        localStorage.removeItem(currentProject);
        $('.part').remove();
        startGame();
    });

    const music = $('#music')[0];
    let isPlaying = true;
    $('#audio').click(() => {
        if (isPlaying) {
            music.pause();
            isPlaying = false;
        }
        else {
            music.play();
            isPlaying = true;
        }
    });

    $('#changeProject').click(() => location.reload());

})();