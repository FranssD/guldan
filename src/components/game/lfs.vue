<template>
    <div id="game">1</div>
</template>

<script>
import $ from 'jquery'
export default {
    data() {
        return {

        }
    },
    mounted() {
        var _w = 375;
        var _h = 627;
        var game = new Phaser.Game(_w, _h, Phaser.CANVAS, "#game")
        var hero,
            ground,
            cursors,
            apples,
            score = 0,
            TimerNumber = 0,
            bg,
            scoreText,
            TimerText,
            TimerTextT,
            RangeText,
            timer = 30,
            Range = 0,
            btnL,
            btnR,
            Lft = false,
            Rft = false,
            num = 1,
            tips,
            scoreMusic,
            bgm,
            boomMusic,
            startTime,
            iconWater,
            loading,
            iconWater2;
        var states = {
            preload: function () {
                this.preload = function () {

                    game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
                    game.load.crossOrigin = 'anonymous';
                    game.load.audio("bgMusic", "images/bgm.mp3");
                    game.load.audio("scoreMusic", "images/addscore.mp3");
                    game.load.spritesheet('dog', 'images/dude.png', 87, 63);
                    game.load.image('apple', 'images/apple.png')
                    game.load.image('ten', 'images/ten.png')
                    game.load.image('boom', 'images/bomb.png')
                    game.load.image('bg', 'images/bg_canvas.jpg')
                    game.load.image('ground', 'images/ground.png')
                    game.load.image('mp', 'images/mp_value.png')
                    game.load.image('mp_bg', 'images/hp_bg.png')
                    game.load.image('tips', 'images/tips2.png')
                    game.load.image('mbtn', 'images/music_btn.png')
                    game.load.image('mbtn2', 'images/zt.png')
                    game.load.image('iconWater', 'images/icon-water.png')
                    game.load.image('iconWater2', 'images/icon-water2.png')


                    // 添加进度文字
                    scoreText = game.add.text(game.world.centerX, game.world.centerY, '0%', {
                        fontSize: '60px',
                        fill: '#ffffff'
                    });
                    scoreText.anchor.setTo(0.5, 0.5);
                    // 监听加载完一个文件的事件
                    game.load.onFileComplete.add(function (progress) {
                        scoreText.text = progress + '%';
                    });
                    // 监听加载完毕事件
                    game.load.onLoadComplete.add(onLoad);
                    // 最小展示时间，示例为2秒
                    var deadLine = false;
                    setTimeout(function () {
                        deadLine = true;
                    }, 2000);
                    // 加载完毕回调方法
                    function onLoad() {
                        if (deadLine) {
                            // 已到达最小展示时间，可以进入下一个场景
                            game.state.start('created');
                        } else {
                            // 还没有到最小展示时间，1秒后重试
                            setTimeout(onLoad, 1000);
                        }
                    }
                }
            },
            created: function () {
                this.create = function () {

                    bg = game.add.tileSprite(0, 0, game.width, game.height, 'bg');
                    tips = game.add.tileSprite(0, 0, _w, _h, 'tips');

                    game.input.onTap.add(function () {
                        game.state.start('play');
                    });
                }
            },
            play: function () {
                this.create = function () {
                    game.physics.startSystem(Phaser.Physics.ARCADE);
                    bg = game.add.sprite(0, 0, 'bg');
                    mp_bg = game.add.sprite(10, 16, 'mp_bg');
                    mp = game.add.sprite(12, 17, 'mp');

                    scoreMusic = game.add.audio('scoreMusic');

                    bgm = game.add.audio('bgMusic');
                    bgm.loop = true;
                    bgm.volume = 0.6;
                    bgm.play();


                    var btn_pause = game.add.button(game.world.width - 60, 60, 'mbtn', function () {
                        bgm.pause();
                        hero.body.velocity.y = 0;
                        btn_pause.x = game.world.width;
                        mbtn2.x = game.world.width - 60;
                    });

                    var mbtn2 = game.add.button(game.world.width, 60, 'mbtn2', function () {
                        bgm.pause();
                        hero.body.velocity.y = 0;
                        btn_pause.x = game.world.width - 60;
                        mbtn2.x = game.world.width;
                    });

                    iconWater = game.add.tileSprite(0, game.world.height - 199, game.world.width, 199, 'iconWater2');


                    hero = game.add.sprite(20, game.world.height / 2, 'dog');

                    game.physics.arcade.enable(hero);
                    hero.body.gravity.y = 1300;
                    // 设置狗与游戏边缘碰撞
                    hero.body.collideWorldBounds = true;
                    hero.animations.add('left', [0], 0, true);
                    hero.animations.add('right', [0, 1, 2], 10, true);
                    hero.animations.add('fly', [4], 0, true);

                    ground = game.add.tileSprite(0, game.world.height - 160, game.world.width, 30, 'ground');
                    game.physics.arcade.enable(ground);
                    game.physics.arcade.enable(iconWater);

                    ground.body.immovable = true;
                    iconWater.body.immovable = true;

                    apples = game.add.group();
                    var appleTypes = ['apple', 'boom', 'boom'];
                    apples.enableBody = true;

                    var appleTimer = game.time.create(true);
                    appleTimer.loop(1200, function () {
                        var index = Math.floor(Math.random() * appleTypes.length)
                        if (index == 0) {
                            var apple = apples.create(game.world.width, game.world.height * (3 / 4) - 50 - (Math.floor(Math.random() * 100)), appleTypes[index]);
                        } else {
                            var apple = apples.create(game.world.width, game.world.height * (3 / 4) - 50, appleTypes[index]);
                        }

                        apple.body.collideWorldBounds = true;
                        apple.body.gravity.x = -200;
                        apple.body.onWorldBounds = new Phaser.Signal();
                        apple.body.onWorldBounds.add(function (apple, up, down, left, right) {
                            if (left) {
                                apple.kill();
                            }
                        });
                    });
                    hero.animations.play('right')

                    appleTimer.loop(1200, function () {
                        //				if(timer > 0) {
                        //					timer -= 1 
                        //					Range += 1
                        //					TimerTextT.text = timer + "s"
                        //					RangeText.text = "奔跑距离" + Range + "m"
                        //				}
                        Range += 1
                        RangeText.text = "奔跑距离" + Range + "m"
                    })

                    appleTimer.start();

                    //			TimerTextT = game.add.bitmapText(10, 50, "time_count", 0, 36);
                    //			TimerTextT.text = "30s"
                    console.log(game.world.width / 2)
                    RangeText = game.add.text(10, 30, "奔跑距离0m", {
                        fontSize: '14px',
                        fill: '#520e0f'
                    })

                    iconWater.autoScroll(-200, 0);

                    game.input.onDown.add(function () {
                        if (num >= 0.1) {
                            hero.body.velocity.y = -500;
                            hero.animations.play('fly')
                            num -= 0.1
                        }
                    })
                    game.input.onUp.add(function () {
                        hero.animations.play('right')
                    })
                    startTime = Date.now();

                    iconWater2 = game.add.tileSprite(-300, game.world.height - 196, game.world.width + 300, 196, 'iconWater');
                    iconWater2.autoScroll(-400, 0);
                    game.physics.arcade.enable(iconWater2);
                    iconWater2.body.immovable = true;
                }
                this.update = function () {
                    hero.body.velocity.x = 0;
                    if (num >= 1) {
                        num = 1
                    } else if (num < 0) {
                        num = 0
                    } else {
                        num += .001
                    }
                    mp.scale.setTo(num, 1);
                    game.physics.arcade.collide(hero, ground);
                    game.physics.arcade.overlap(hero, apples, collectStar, null, this);

                }

                function collectStar(hero, apples) {
                    apples.kill()
                    if (apples.key == "apple") {

                        var goal = game.add.image(apples.x, apples.y, "ten");
                        var goalImg = game.cache.getImage(score);

                        goal.width = apples.width;
                        goal.height = goal.width / (goalImg.width / goalImg.height);
                        goal.alpha = 0;

                        var showTween = game.add.tween(goal).to({
                            alpha: 1,
                            y: goal.y - 20
                        }, 100, Phaser.Easing.Linear.None, true, 0, 0, false);
                        showTween.onComplete.add(function () {
                            var hideTween = game.add.tween(goal).to({
                                alpha: 0,
                                y: goal.y - 20
                            }, 100, Phaser.Easing.Linear.None, true, 200, 0, false);
                            hideTween.onComplete.add(function () {
                                goal.kill();
                            });
                        });

                        scoreMusic.play();

                        score += 1;
                        Range += 10;
                    } else {

                        localStorage.setItem("defen", Range)
                        bgm.pause();
                        game.state.start('over', true, false, score);

                    }
                }
            },
            over: function () {

                this.create = function () {

                    // 添加文本
                    var title = game.add.text(game.world.centerX, game.world.height * 0.25, '游戏结束', {
                        fontSize: '40px',
                        fontWeight: 'bold',
                        fill: '#f2bb15'
                    });
                    title.anchor.setTo(0.5, 0.5);
                    var scoreStr = '你跑了：' + Range + '米';
                    var scoreText = game.add.text(game.world.centerX, game.world.height * 0.4, scoreStr, {
                        fontSize: '30px',
                        fontWeight: 'bold',
                        fill: '#f2bb15'
                    });
                    scoreText.anchor.setTo(0.5, 0.5);
                    var remind = game.add.text(game.world.centerX, game.world.height * 0.6, '游戏结束，刷新一次在来', {
                        fontSize: '20px',
                        fontWeight: 'bold',
                        fill: '#f2bb15'
                    });
                    remind.anchor.setTo(0.5, 0.5);

                }
            }
        }
        // 添加场景到游戏示例中
        Object.keys(states).map(function (key) {
            game.state.add(key, states[key]);
        });

        // 启动游戏
        game.state.start('preload');
    }
}
</script>

<style>

</style>
