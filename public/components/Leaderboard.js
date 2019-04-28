export default{
    name: "Leaderboard",
    template: '',
    /*data() {
        return {
            tadpoles: undefined,
            context: undefined
        }
    },*/
    mounted() {
        function getJSON(url, callback)
        {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'json';
            xhr.onload = function() {
              var status = xhr.status;
              if (status === 200) {
                callback(null, xhr.response);
              } else {
                callback(status, xhr.response);
              }
            };
            xhr.send();
        }
        document.getElementsByTagName("body")[0].style.overflow = "visible";
        var N = 10;
        getJSON('https://randomuser.me/api/?results='+N,
        function(err, data) {
          if (err !== null) {
            alert('Something went wrong: ' + err);
          } else {
            console.log(data);
            var best = Math.floor(Math.random()*1000) + 200;
            for(var i = 0; i < N; i++)
            {
                var row = document.createElement("DIV");
                row.className = "row";
                var icon = document.createElement("SPAN");
                icon.className = "icon";
                if(i<=2)
                {
                    row.classList.add("winner");
                    var image = document.createElement("I");
                    image.className = "fas fa-trophy";
                    icon.appendChild(image);
                }
                else
                    icon.innerHTML = i+1;
                var avatar = document.createElement("SPAN");
                avatar.className = "avatar";
                avatar.style.backgroundImage = "url("+data.results[i].picture.thumbnail+")";
                var name = document.createElement("SPAN");
                name.className = "name";
                name.innerHTML = data.results[i].name.first + " " + data.results[i].name.last;
                var points = document.createElement("SPAN");
                points.className = "points";
                points.innerHTML = best + " tadpools";     
                row.appendChild(icon);
                row.appendChild(avatar);
                row.appendChild(name);
                row.appendChild(points);
                var parent = document.getElementsByClassName("leaderboard")[0];
                var a = parent.getElementsByTagName("a")[0];
                console.log(a);
                //parent.insertBefore(row,a);
                parent.appendChild(row);
                best -= Math.floor(Math.random()*100+20);
            }
          }
        });
    }
        /*
        <div class="row winner">
            <span class="icon"><i class="fas fa-trophy"></i></span>
            <span class="avatar"></span>
            <span class="name">Randy Goldman</span>
            <span class="points">25 tadpools</span>
        </div>
        */        
    
}