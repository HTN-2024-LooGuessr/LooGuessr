import{q as re,r as x,V as Re,n as B,K as Ne,u as ve,t as Se,C as Le,a as ne,M as _e,T as Fe,b as X,c as Ce,i as Ue,y as q,P as H,d as j,s as Oe,e as ke,O as ze,f as Ge,S,$ as De,F as ie,g as Pe,h as Be,j as He,k as Ve,Z as je,Y as Ye,l as Ke,m as Xe,o as qe,I as $e}from"./index-Dre-EBp4.js";re();re();var k,Y,_,G;function D(o,e=1/0,t=null){Y||(Y=new ve(2,2,1,1)),_||(_=new Se({uniforms:{blitTexture:new Le(o)},vertexShader:`
			varying vec2 vUv;
			void main(){
				vUv = uv;
				gl_Position = vec4(position.xy * 1.0,0.,.999999);
			}`,fragmentShader:`
			uniform sampler2D blitTexture; 
			varying vec2 vUv;

			void main(){ 
				gl_FragColor = vec4(vUv.xy, 0, 1);
				
				#ifdef IS_SRGB
				gl_FragColor = LinearTosRGB( texture2D( blitTexture, vUv) );
				#else
				gl_FragColor = texture2D( blitTexture, vUv);
				#endif
			}`})),_.uniforms.blitTexture.value=o,_.defines.IS_SRGB=o.colorSpace==ne,_.needsUpdate=!0,G||(G=new _e(Y,_),G.frustrumCulled=!1);let s=new Fe,r=new X;r.add(G),t===null&&(t=k=new Ce({antialias:!1}));let i=Math.min(o.image.width,e),n=Math.min(o.image.height,e);t.setSize(i,n),t.clear(),t.render(r,s);let a=document.createElement("canvas"),u=a.getContext("2d");a.width=i,a.height=n,u.drawImage(t.domElement,0,0,i,n);let l=new Ue(a);return l.minFilter=o.minFilter,l.magFilter=o.magFilter,l.wrapS=o.wrapS,l.wrapT=o.wrapT,l.name=o.name,k&&(k.forceContextLoss(),k.dispose(),k=null),l}x(D,"decompress");var Q={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]},ae=class{constructor(){this.pluginCallbacks=[],this.register(function(e){return new st(e)}),this.register(function(e){return new rt(e)}),this.register(function(e){return new at(e)}),this.register(function(e){return new ot(e)}),this.register(function(e){return new lt(e)}),this.register(function(e){return new ut(e)}),this.register(function(e){return new nt(e)}),this.register(function(e){return new it(e)}),this.register(function(e){return new ht(e)}),this.register(function(e){return new ct(e)}),this.register(function(e){return new pt(e)}),this.register(function(e){return new mt(e)}),this.register(function(e){return new ft(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,s,r){let i=new tt,n=[];for(let a=0,u=this.pluginCallbacks.length;a<u;a++)n.push(this.pluginCallbacks[a](i));i.setPlugins(n),i.write(e,t,r).catch(s)}parseAsync(e,t){let s=this;return new Promise(function(r,i){s.parse(e,r,i,t)})}};x(ae,"GLTFExporter");var oe=ae,g={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},K="KHR_mesh_quantization",A={};A[Pe]=g.NEAREST;A[Be]=g.NEAREST_MIPMAP_NEAREST;A[He]=g.NEAREST_MIPMAP_LINEAR;A[Ve]=g.LINEAR;A[je]=g.LINEAR_MIPMAP_NEAREST;A[Ye]=g.LINEAR_MIPMAP_LINEAR;A[Ke]=g.CLAMP_TO_EDGE;A[Xe]=g.REPEAT;A[qe]=g.MIRRORED_REPEAT;var ee={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},We=new Re,te=12,Ze=1179937895,Je=2,se=8,Qe=1313821514,et=5130562;function F(o,e){return o.length===e.length&&o.every(function(t,s){return t===e[s]})}x(F,"equalArray");function le(o){return new TextEncoder().encode(o).buffer}x(le,"stringToArrayBuffer");function ue(o){return F(o.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}x(ue,"isIdentityMatrix");function he(o,e,t){let s={min:new Array(o.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(o.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let r=e;r<e+t;r++)for(let i=0;i<o.itemSize;i++){let n;o.itemSize>4?n=o.array[r*o.itemSize+i]:(i===0?n=o.getX(r):i===1?n=o.getY(r):i===2?n=o.getZ(r):i===3&&(n=o.getW(r)),o.normalized===!0&&(n=q.normalize(n,o.array))),s.min[i]=Math.min(s.min[i],n),s.max[i]=Math.max(s.max[i],n)}return s}x(he,"getMinMax");function Z(o){return Math.ceil(o/4)*4}x(Z,"getPaddedBufferSize");function P(o,e=0){let t=Z(o.byteLength);if(t!==o.byteLength){let s=new Uint8Array(t);if(s.set(new Uint8Array(o)),e!==0)for(let r=o.byteLength;r<t;r++)s[r]=e;return s.buffer}return o}x(P,"getPaddedArrayBuffer");function $(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}x($,"getCanvas");function W(o,e){if(o.toBlob!==void 0)return new Promise(s=>o.toBlob(s,e));let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),o.convertToBlob({type:e,quality:t})}x(W,"getToBlobPromise");var ce=class{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map}}setPlugins(e){this.plugins=e}async write(e,t,s={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},s),this.options.animations.length>0&&(this.options.trs=!0),this.processInput(e),await Promise.all(this.pending);let r=this,i=r.buffers,n=r.json;s=r.options;let a=r.extensionsUsed,u=r.extensionsRequired,l=new Blob(i,{type:"application/octet-stream"}),m=Object.keys(a),c=Object.keys(u);if(m.length>0&&(n.extensionsUsed=m),c.length>0&&(n.extensionsRequired=c),n.buffers&&n.buffers.length>0&&(n.buffers[0].byteLength=l.size),s.binary===!0){let d=new FileReader;d.readAsArrayBuffer(l),d.onloadend=function(){let h=P(d.result),p=new DataView(new ArrayBuffer(se));p.setUint32(0,h.byteLength,!0),p.setUint32(4,et,!0);let w=P(le(JSON.stringify(n)),32),y=new DataView(new ArrayBuffer(se));y.setUint32(0,w.byteLength,!0),y.setUint32(4,Qe,!0);let E=new ArrayBuffer(te),R=new DataView(E);R.setUint32(0,Ze,!0),R.setUint32(4,Je,!0);let z=te+y.byteLength+w.byteLength+p.byteLength+h.byteLength;R.setUint32(8,z,!0);let f=new Blob([E,y,w,p,h],{type:"application/octet-stream"}),T=new FileReader;T.readAsArrayBuffer(f),T.onloadend=function(){t(T.result)}}}else if(n.buffers&&n.buffers.length>0){let d=new FileReader;d.readAsDataURL(l),d.onloadend=function(){let h=d.result;n.buffers[0].uri=h,t(n)}}else t(n)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;let s=this.options,r=this.extensionsUsed;try{let i=JSON.parse(JSON.stringify(e.userData));if(s.includeCustomExtensions&&i.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(let n in i.gltfExtensions)t.extensions[n]=i.gltfExtensions[n],r[n]=!0;delete i.gltfExtensions}Object.keys(i).length>0&&(t.extras=i)}catch(i){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+i.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){let s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(e,s)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;let t=new H;for(let s=0,r=e.count;s<r;s++)if(Math.abs(t.fromBufferAttribute(e,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){let t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);let s=e.clone(),r=new H;for(let i=0,n=s.count;i<n;i++)r.fromBufferAttribute(s,i),r.x===0&&r.y===0&&r.z===0?r.setX(1):r.normalize(),s.setXYZ(i,r.x,r.y,r.z);return t.attributesNormalized.set(e,s),s}applyTextureTransform(e,t){let s=!1,r={};(t.offset.x!==0||t.offset.y!==0)&&(r.offset=t.offset.toArray(),s=!0),t.rotation!==0&&(r.rotation=t.rotation,s=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(r.scale=t.repeat.toArray(),s=!0),s&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=r,this.extensionsUsed.KHR_texture_transform=!0)}buildMetalRoughTexture(e,t){if(e===t)return e;function s(d){return d.colorSpace===ne?x(function(h){return h<.04045?h*.0773993808:Math.pow(h*.9478672986+.0521327014,2.4)},"SRGBToLinear"):x(function(h){return h},"LinearToLinear")}x(s,"getEncodingConversion"),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),e instanceof j&&(e=D(e)),t instanceof j&&(t=D(t));let r=e?e.image:null,i=t?t.image:null,n=Math.max(r?r.width:0,i?i.width:0),a=Math.max(r?r.height:0,i?i.height:0),u=$();u.width=n,u.height=a;let l=u.getContext("2d");l.fillStyle="#00ffff",l.fillRect(0,0,n,a);let m=l.getImageData(0,0,n,a);if(r){l.drawImage(r,0,0,n,a);let d=s(e),h=l.getImageData(0,0,n,a).data;for(let p=2;p<h.length;p+=4)m.data[p]=d(h[p]/256)*256}if(i){l.drawImage(i,0,0,n,a);let d=s(t),h=l.getImageData(0,0,n,a).data;for(let p=1;p<h.length;p+=4)m.data[p]=d(h[p]/256)*256}l.putImageData(m,0,0);let c=(e||t).clone();return c.source=new Oe(u),c.colorSpace=ke,c.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),c}processBuffer(e){let t=this.json,s=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),s.push(e),0}processBufferView(e,t,s,r,i){let n=this.json;n.bufferViews||(n.bufferViews=[]);let a;switch(t){case g.BYTE:case g.UNSIGNED_BYTE:a=1;break;case g.SHORT:case g.UNSIGNED_SHORT:a=2;break;default:a=4}let u=Z(r*e.itemSize*a),l=new DataView(new ArrayBuffer(u)),m=0;for(let d=s;d<s+r;d++)for(let h=0;h<e.itemSize;h++){let p;e.itemSize>4?p=e.array[d*e.itemSize+h]:(h===0?p=e.getX(d):h===1?p=e.getY(d):h===2?p=e.getZ(d):h===3&&(p=e.getW(d)),e.normalized===!0&&(p=q.normalize(p,e.array))),t===g.FLOAT?l.setFloat32(m,p,!0):t===g.INT?l.setInt32(m,p,!0):t===g.UNSIGNED_INT?l.setUint32(m,p,!0):t===g.SHORT?l.setInt16(m,p,!0):t===g.UNSIGNED_SHORT?l.setUint16(m,p,!0):t===g.BYTE?l.setInt8(m,p):t===g.UNSIGNED_BYTE&&l.setUint8(m,p),m+=a}let c={buffer:this.processBuffer(l.buffer),byteOffset:this.byteOffset,byteLength:u};return i!==void 0&&(c.target=i),i===g.ARRAY_BUFFER&&(c.byteStride=e.itemSize*a),this.byteOffset+=u,n.bufferViews.push(c),{id:n.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){let t=this,s=t.json;return s.bufferViews||(s.bufferViews=[]),new Promise(function(r){let i=new FileReader;i.readAsArrayBuffer(e),i.onloadend=function(){let n=P(i.result),a={buffer:t.processBuffer(n),byteOffset:t.byteOffset,byteLength:n.byteLength};t.byteOffset+=n.byteLength,r(s.bufferViews.push(a)-1)}})}processAccessor(e,t,s,r){let i=this.json,n={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"},a;if(e.array.constructor===Float32Array)a=g.FLOAT;else if(e.array.constructor===Int32Array)a=g.INT;else if(e.array.constructor===Uint32Array)a=g.UNSIGNED_INT;else if(e.array.constructor===Int16Array)a=g.SHORT;else if(e.array.constructor===Uint16Array)a=g.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)a=g.BYTE;else if(e.array.constructor===Uint8Array)a=g.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(s===void 0&&(s=0),(r===void 0||r===1/0)&&(r=e.count),r===0)return null;let u=he(e,s,r),l;t!==void 0&&(l=e===t.index?g.ELEMENT_ARRAY_BUFFER:g.ARRAY_BUFFER);let m=this.processBufferView(e,a,s,r,l),c={bufferView:m.id,byteOffset:m.byteOffset,componentType:a,count:r,max:u.max,min:u.min,type:n[e.itemSize]};return e.normalized===!0&&(c.normalized=!0),i.accessors||(i.accessors=[]),i.accessors.push(c)-1}processImage(e,t,s,r="image/png"){if(e!==null){let i=this,n=i.cache,a=i.json,u=i.options,l=i.pending;n.images.has(e)||n.images.set(e,{});let m=n.images.get(e),c=r+":flipY/"+s.toString();if(m[c]!==void 0)return m[c];a.images||(a.images=[]);let d={mimeType:r},h=$();h.width=Math.min(e.width,u.maxTextureSize),h.height=Math.min(e.height,u.maxTextureSize);let p=h.getContext("2d");if(s===!0&&(p.translate(0,h.height),p.scale(1,-1)),e.data!==void 0){t!==ze&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>u.maxTextureSize||e.height>u.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);let y=new Uint8ClampedArray(e.height*e.width*4);for(let E=0;E<y.length;E+=4)y[E+0]=e.data[E+0],y[E+1]=e.data[E+1],y[E+2]=e.data[E+2],y[E+3]=e.data[E+3];p.putImageData(new ImageData(y,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)p.drawImage(e,0,0,h.width,h.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement or ImageBitmap.");u.binary===!0?l.push(W(h,r).then(y=>i.processBufferViewImage(y)).then(y=>{d.bufferView=y})):h.toDataURL!==void 0?d.uri=h.toDataURL(r):l.push(W(h,r).then(y=>new FileReader().readAsDataURL(y)).then(y=>{d.uri=y}));let w=a.images.push(d)-1;return m[c]=w,w}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){let t=this.json;t.samplers||(t.samplers=[]);let s={magFilter:A[e.magFilter],minFilter:A[e.minFilter],wrapS:A[e.wrapS],wrapT:A[e.wrapT]};return t.samplers.push(s)-1}processTexture(e){let t=this.options,s=this.cache,r=this.json;if(s.textures.has(e))return s.textures.get(e);r.textures||(r.textures=[]),e instanceof j&&(e=D(e,t.maxTextureSize));let i=e.userData.mimeType;i==="image/webp"&&(i="image/png");let n={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,i)};e.name&&(n.name=e.name),this._invokeAll(function(u){u.writeTexture&&u.writeTexture(e,n)});let a=r.textures.push(n)-1;return s.textures.set(e,a),a}processMaterial(e){let t=this.cache,s=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;s.materials||(s.materials=[]);let r={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");let i=e.color.toArray().concat([e.opacity]);if(F(i,[1,1,1,1])||(r.pbrMetallicRoughness.baseColorFactor=i),e.isMeshStandardMaterial?(r.pbrMetallicRoughness.metallicFactor=e.metalness,r.pbrMetallicRoughness.roughnessFactor=e.roughness):(r.pbrMetallicRoughness.metallicFactor=.5,r.pbrMetallicRoughness.roughnessFactor=.5),e.metalnessMap||e.roughnessMap){let a=this.buildMetalRoughTexture(e.metalnessMap,e.roughnessMap),u={index:this.processTexture(a),channel:a.channel};this.applyTextureTransform(u,a),r.pbrMetallicRoughness.metallicRoughnessTexture=u}if(e.map){let a={index:this.processTexture(e.map),texCoord:e.map.channel};this.applyTextureTransform(a,e.map),r.pbrMetallicRoughness.baseColorTexture=a}if(e.emissive){let a=e.emissive;if(Math.max(a.r,a.g,a.b)>0&&(r.emissiveFactor=e.emissive.toArray()),e.emissiveMap){let u={index:this.processTexture(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(u,e.emissiveMap),r.emissiveTexture=u}}if(e.normalMap){let a={index:this.processTexture(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(a.scale=e.normalScale.x),this.applyTextureTransform(a,e.normalMap),r.normalTexture=a}if(e.aoMap){let a={index:this.processTexture(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(a.strength=e.aoMapIntensity),this.applyTextureTransform(a,e.aoMap),r.occlusionTexture=a}e.transparent?r.alphaMode="BLEND":e.alphaTest>0&&(r.alphaMode="MASK",r.alphaCutoff=e.alphaTest),e.side===Ge&&(r.doubleSided=!0),e.name!==""&&(r.name=e.name),this.serializeUserData(e,r),this._invokeAll(function(a){a.writeMaterial&&a.writeMaterial(e,r)});let n=s.materials.push(r)-1;return t.materials.set(e,n),n}processMesh(e){let t=this.cache,s=this.json,r=[e.geometry.uuid];if(Array.isArray(e.material))for(let f=0,T=e.material.length;f<T;f++)r.push(e.material[f].uuid);else r.push(e.material.uuid);let i=r.join(":");if(t.meshes.has(i))return t.meshes.get(i);let n=e.geometry,a;e.isLineSegments?a=g.LINES:e.isLineLoop?a=g.LINE_LOOP:e.isLine?a=g.LINE_STRIP:e.isPoints?a=g.POINTS:a=e.material.wireframe?g.LINES:g.TRIANGLES;let u={},l={},m=[],c=[],d={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},h=n.getAttribute("normal");h!==void 0&&!this.isNormalizedNormalAttribute(h)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),n.setAttribute("normal",this.createNormalizedNormalAttribute(h)));let p=null;for(let f in n.attributes){if(f.slice(0,5)==="morph")continue;let T=n.attributes[f];if(f=d[f]||f.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(f)||(f="_"+f),t.attributes.has(this.getUID(T))){l[f]=t.attributes.get(this.getUID(T));continue}p=null;let M=T.array;f==="JOINTS_0"&&!(M instanceof Uint16Array)&&!(M instanceof Uint8Array)&&(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),p=new S(new Uint16Array(M),T.itemSize,T.normalized));let b=this.processAccessor(p||T,n);b!==null&&(f.startsWith("_")||this.detectMeshQuantization(f,T),l[f]=b,t.attributes.set(this.getUID(T),b))}if(h!==void 0&&n.setAttribute("normal",h),Object.keys(l).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){let f=[],T=[],M={};if(e.morphTargetDictionary!==void 0)for(let b in e.morphTargetDictionary)M[e.morphTargetDictionary[b]]=b;for(let b=0;b<e.morphTargetInfluences.length;++b){let N={},J=!1;for(let C in n.morphAttributes){if(C!=="position"&&C!=="normal"){J||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),J=!0);continue}let v=n.morphAttributes[C][b],V=C.toUpperCase(),U=n.attributes[C];if(t.attributes.has(this.getUID(v,!0))){N[V]=t.attributes.get(this.getUID(v,!0));continue}let O=v.clone();if(!n.morphTargetsRelative)for(let I=0,Ae=v.count;I<Ae;I++)for(let L=0;L<v.itemSize;L++)L===0&&O.setX(I,v.getX(I)-U.getX(I)),L===1&&O.setY(I,v.getY(I)-U.getY(I)),L===2&&O.setZ(I,v.getZ(I)-U.getZ(I)),L===3&&O.setW(I,v.getW(I)-U.getW(I));N[V]=this.processAccessor(O,n),t.attributes.set(this.getUID(U,!0),N[V])}c.push(N),f.push(e.morphTargetInfluences[b]),e.morphTargetDictionary!==void 0&&T.push(M[b])}u.weights=f,T.length>0&&(u.extras={},u.extras.targetNames=T)}let w=Array.isArray(e.material);if(w&&n.groups.length===0)return null;let y=!1;if(w&&n.index===null){let f=[];for(let T=0,M=n.attributes.position.count;T<M;T++)f[T]=T;n.setIndex(f),y=!0}let E=w?e.material:[e.material],R=w?n.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let f=0,T=R.length;f<T;f++){let M={mode:a,attributes:l};if(this.serializeUserData(n,M),c.length>0&&(M.targets=c),n.index!==null){let N=this.getUID(n.index);(R[f].start!==void 0||R[f].count!==void 0)&&(N+=":"+R[f].start+":"+R[f].count),t.attributes.has(N)?M.indices=t.attributes.get(N):(M.indices=this.processAccessor(n.index,n,R[f].start,R[f].count),t.attributes.set(N,M.indices)),M.indices===null&&delete M.indices}let b=this.processMaterial(E[R[f].materialIndex]);b!==null&&(M.material=b),m.push(M)}y===!0&&n.setIndex(null),u.primitives=m,s.meshes||(s.meshes=[]),this._invokeAll(function(f){f.writeMesh&&f.writeMesh(e,u)});let z=s.meshes.push(u)-1;return t.meshes.set(i,z),z}detectMeshQuantization(e,t){if(this.extensionsUsed[K])return;let s;switch(t.array.constructor){case Int8Array:s="byte";break;case Uint8Array:s="unsigned byte";break;case Int16Array:s="short";break;case Uint16Array:s="unsigned short";break;default:return}t.normalized&&(s+=" normalized");let r=e.split("_",1)[0];Q[r]&&Q[r].includes(s)&&(this.extensionsUsed[K]=!0,this.extensionsRequired[K]=!0)}processCamera(e){let t=this.json;t.cameras||(t.cameras=[]);let s=e.isOrthographicCamera,r={type:s?"orthographic":"perspective"};return s?r.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:r.perspective={aspectRatio:e.aspect,yfov:q.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(r.name=e.type),t.cameras.push(r)-1}processAnimation(e,t){let s=this.json,r=this.nodeMap;s.animations||(s.animations=[]),e=oe.Utils.mergeMorphTargetTracks(e.clone(),t);let i=e.tracks,n=[],a=[];for(let u=0;u<i.length;++u){let l=i[u],m=B.parseTrackName(l.name),c=B.findNode(t,m.nodeName),d=ee[m.propertyName];if(m.objectName==="bones"&&(c.isSkinnedMesh===!0?c=c.skeleton.getBoneByName(m.objectIndex):c=void 0),!c||!d)return console.warn('THREE.GLTFExporter: Could not export animation track "%s".',l.name),null;let h=1,p=l.values.length/l.times.length;d===ee.morphTargetInfluences&&(p/=c.morphTargetInfluences.length);let w;l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(w="CUBICSPLINE",p/=3):l.getInterpolation()===De?w="STEP":w="LINEAR",a.push({input:this.processAccessor(new S(l.times,h)),output:this.processAccessor(new S(l.values,p)),interpolation:w}),n.push({sampler:a.length-1,target:{node:r.get(c),path:d}})}return s.animations.push({name:e.name||"clip_"+s.animations.length,samplers:a,channels:n}),s.animations.length-1}processSkin(e){let t=this.json,s=this.nodeMap,r=t.nodes[s.get(e)],i=e.skeleton;if(i===void 0)return null;let n=e.skeleton.bones[0];if(n===void 0)return null;let a=[],u=new Float32Array(i.bones.length*16),l=new ie;for(let m=0;m<i.bones.length;++m)a.push(s.get(i.bones[m])),l.copy(i.boneInverses[m]),l.multiply(e.bindMatrix).toArray(u,m*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new S(u,16)),joints:a,skeleton:s.get(n)}),r.skin=t.skins.length-1}processNode(e){let t=this.json,s=this.options,r=this.nodeMap;t.nodes||(t.nodes=[]);let i={};if(s.trs){let a=e.quaternion.toArray(),u=e.position.toArray(),l=e.scale.toArray();F(a,[0,0,0,1])||(i.rotation=a),F(u,[0,0,0])||(i.translation=u),F(l,[1,1,1])||(i.scale=l)}else e.matrixAutoUpdate&&e.updateMatrix(),ue(e.matrix)===!1&&(i.matrix=e.matrix.elements);if(e.name!==""&&(i.name=String(e.name)),this.serializeUserData(e,i),e.isMesh||e.isLine||e.isPoints){let a=this.processMesh(e);a!==null&&(i.mesh=a)}else e.isCamera&&(i.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){let a=[];for(let u=0,l=e.children.length;u<l;u++){let m=e.children[u];if(m.visible||s.onlyVisible===!1){let c=this.processNode(m);c!==null&&a.push(c)}}a.length>0&&(i.children=a)}this._invokeAll(function(a){a.writeNode&&a.writeNode(e,i)});let n=t.nodes.push(i)-1;return r.set(e,n),n}processScene(e){let t=this.json,s=this.options;t.scenes||(t.scenes=[],t.scene=0);let r={};e.name!==""&&(r.name=e.name),t.scenes.push(r);let i=[];for(let n=0,a=e.children.length;n<a;n++){let u=e.children[n];if(u.visible||s.onlyVisible===!1){let l=this.processNode(u);l!==null&&i.push(l)}}i.length>0&&(r.nodes=i),this.serializeUserData(e,r)}processObjects(e){let t=new X;t.name="AuxScene";for(let s=0;s<e.length;s++)t.children.push(e[s]);this.processScene(t)}processInput(e){let t=this.options;e=e instanceof Array?e:[e],this._invokeAll(function(r){r.beforeParse&&r.beforeParse(e)});let s=[];for(let r=0;r<e.length;r++)e[r]instanceof X?this.processScene(e[r]):s.push(e[r]);s.length>0&&this.processObjects(s);for(let r=0;r<this.skins.length;++r)this.processSkin(this.skins[r]);for(let r=0;r<t.animations.length;++r)this.processAnimation(t.animations[r],e[0]);this._invokeAll(function(r){r.afterParse&&r.afterParse(e)})}_invokeAll(e){for(let t=0,s=this.plugins.length;t<s;t++)e(this.plugins[t])}};x(ce,"GLTFWriter");var tt=ce,pe=class{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}let s=this.writer,r=s.json,i=s.extensionsUsed,n={};e.name&&(n.name=e.name),n.color=e.color.toArray(),n.intensity=e.intensity,e.isDirectionalLight?n.type="directional":e.isPointLight?(n.type="point",e.distance>0&&(n.range=e.distance)):e.isSpotLight&&(n.type="spot",e.distance>0&&(n.range=e.distance),n.spot={},n.spot.innerConeAngle=(1-e.penumbra)*e.angle,n.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),i[this.name]||(r.extensions=r.extensions||{},r.extensions[this.name]={lights:[]},i[this.name]=!0);let a=r.extensions[this.name].lights;a.push(n),t.extensions=t.extensions||{},t.extensions[this.name]={light:a.length-1}}};x(pe,"GLTFLightExtension");var st=pe,me=class{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}writeMaterial(e,t){if(!e.isMeshBasicMaterial)return;let s=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},s[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}};x(me,"GLTFMaterialsUnlitExtension");var rt=me,fe=class{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;let s=this.writer,r=s.extensionsUsed,i={};if(i.clearcoatFactor=e.clearcoat,e.clearcoatMap){let n={index:s.processTexture(e.clearcoatMap),texCoord:e.clearcoatMap.channel};s.applyTextureTransform(n,e.clearcoatMap),i.clearcoatTexture=n}if(i.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){let n={index:s.processTexture(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};s.applyTextureTransform(n,e.clearcoatRoughnessMap),i.clearcoatRoughnessTexture=n}if(e.clearcoatNormalMap){let n={index:s.processTexture(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};s.applyTextureTransform(n,e.clearcoatNormalMap),i.clearcoatNormalTexture=n}t.extensions=t.extensions||{},t.extensions[this.name]=i,r[this.name]=!0}};x(fe,"GLTFMaterialsClearcoatExtension");var nt=fe,de=class{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;let s=this.writer,r=s.extensionsUsed,i={};if(i.iridescenceFactor=e.iridescence,e.iridescenceMap){let n={index:s.processTexture(e.iridescenceMap),texCoord:e.iridescenceMap.channel};s.applyTextureTransform(n,e.iridescenceMap),i.iridescenceTexture=n}if(i.iridescenceIor=e.iridescenceIOR,i.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],i.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){let n={index:s.processTexture(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};s.applyTextureTransform(n,e.iridescenceThicknessMap),i.iridescenceThicknessTexture=n}t.extensions=t.extensions||{},t.extensions[this.name]=i,r[this.name]=!0}};x(de,"GLTFMaterialsIridescenceExtension");var it=de,ge=class{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let s=this.writer,r=s.extensionsUsed,i={};if(i.transmissionFactor=e.transmission,e.transmissionMap){let n={index:s.processTexture(e.transmissionMap),texCoord:e.transmissionMap.channel};s.applyTextureTransform(n,e.transmissionMap),i.transmissionTexture=n}t.extensions=t.extensions||{},t.extensions[this.name]=i,r[this.name]=!0}};x(ge,"GLTFMaterialsTransmissionExtension");var at=ge,xe=class{constructor(e){this.writer=e,this.name="KHR_materials_volume"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let s=this.writer,r=s.extensionsUsed,i={};if(i.thicknessFactor=e.thickness,e.thicknessMap){let n={index:s.processTexture(e.thicknessMap),texCoord:e.thicknessMap.channel};s.applyTextureTransform(n,e.thicknessMap),i.thicknessTexture=n}i.attenuationDistance=e.attenuationDistance,i.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=i,r[this.name]=!0}};x(xe,"GLTFMaterialsVolumeExtension");var ot=xe,Te=class{constructor(e){this.writer=e,this.name="KHR_materials_ior"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;let s=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}};x(Te,"GLTFMaterialsIorExtension");var lt=Te,ye=class{constructor(e){this.writer=e,this.name="KHR_materials_specular"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(We)&&!e.specularIntensityMap&&!e.specularColorMap)return;let s=this.writer,r=s.extensionsUsed,i={};if(e.specularIntensityMap){let n={index:s.processTexture(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};s.applyTextureTransform(n,e.specularIntensityMap),i.specularTexture=n}if(e.specularColorMap){let n={index:s.processTexture(e.specularColorMap),texCoord:e.specularColorMap.channel};s.applyTextureTransform(n,e.specularColorMap),i.specularColorTexture=n}i.specularFactor=e.specularIntensity,i.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=i,r[this.name]=!0}};x(ye,"GLTFMaterialsSpecularExtension");var ut=ye,Me=class{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;let s=this.writer,r=s.extensionsUsed,i={};if(e.sheenRoughnessMap){let n={index:s.processTexture(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};s.applyTextureTransform(n,e.sheenRoughnessMap),i.sheenRoughnessTexture=n}if(e.sheenColorMap){let n={index:s.processTexture(e.sheenColorMap),texCoord:e.sheenColorMap.channel};s.applyTextureTransform(n,e.sheenColorMap),i.sheenColorTexture=n}i.sheenRoughnessFactor=e.sheenRoughness,i.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=i,r[this.name]=!0}};x(Me,"GLTFMaterialsSheenExtension");var ht=Me,we=class{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;let s=this.writer,r=s.extensionsUsed,i={};if(e.anisotropyMap){let n={index:s.processTexture(e.anisotropyMap)};s.applyTextureTransform(n,e.anisotropyMap),i.anisotropyTexture=n}i.anisotropyStrength=e.anisotropy,i.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=i,r[this.name]=!0}};x(we,"GLTFMaterialsAnisotropyExtension");var ct=we,Ee=class{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}writeMaterial(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;let s=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}};x(Ee,"GLTFMaterialsEmissiveStrengthExtension");var pt=Ee,be=class{constructor(e){this.writer=e,this.name="EXT_materials_bump"}writeMaterial(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;let s=this.writer,r=s.extensionsUsed,i={};if(e.bumpMap){let n={index:s.processTexture(e.bumpMap),texCoord:e.bumpMap.channel};s.applyTextureTransform(n,e.bumpMap),i.bumpTexture=n}i.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=i,r[this.name]=!0}};x(be,"GLTFMaterialsBumpExtension");var mt=be,Ie=class{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;let s=this.writer,r=e,i=new Float32Array(r.count*3),n=new Float32Array(r.count*4),a=new Float32Array(r.count*3),u=new ie,l=new H,m=new $e,c=new H;for(let h=0;h<r.count;h++)r.getMatrixAt(h,u),u.decompose(l,m,c),l.toArray(i,h*3),m.toArray(n,h*4),c.toArray(a,h*3);let d={TRANSLATION:s.processAccessor(new S(i,3)),ROTATION:s.processAccessor(new S(n,4)),SCALE:s.processAccessor(new S(a,3))};r.instanceColor&&(d._COLOR_0=s.processAccessor(r.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:d},s.extensionsUsed[this.name]=!0,s.extensionsRequired[this.name]=!0}};x(Ie,"GLTFMeshGpuInstancing");var ft=Ie;oe.Utils={insertKeyframe:function(o,e){let t=o.getValueSize(),s=new o.TimeBufferType(o.times.length+1),r=new o.ValueBufferType(o.values.length+t),i=o.createInterpolant(new o.ValueBufferType(t)),n;if(o.times.length===0){s[0]=e;for(let a=0;a<t;a++)r[a]=0;n=0}else if(e<o.times[0]){if(Math.abs(o.times[0]-e)<.001)return 0;s[0]=e,s.set(o.times,1),r.set(i.evaluate(e),0),r.set(o.values,t),n=0}else if(e>o.times[o.times.length-1]){if(Math.abs(o.times[o.times.length-1]-e)<.001)return o.times.length-1;s[s.length-1]=e,s.set(o.times,0),r.set(o.values,0),r.set(i.evaluate(e),o.values.length),n=s.length-1}else for(let a=0;a<o.times.length;a++){if(Math.abs(o.times[a]-e)<.001)return a;if(o.times[a]<e&&o.times[a+1]>e){s.set(o.times.slice(0,a+1),0),s[a+1]=e,s.set(o.times.slice(a+1),a+2),r.set(o.values.slice(0,(a+1)*t),0),r.set(i.evaluate(e),(a+1)*t),r.set(o.values.slice((a+1)*t),(a+2)*t),n=a+1;break}}return o.times=s,o.values=r,n},mergeMorphTargetTracks:function(o,e){let t=[],s={},r=o.tracks;for(let i=0;i<r.length;++i){let n=r[i],a=B.parseTrackName(n.name),u=B.findNode(e,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){t.push(n);continue}if(n.createInterpolant!==n.InterpolantFactoryMethodDiscrete&&n.createInterpolant!==n.InterpolantFactoryMethodLinear){if(n.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),n=n.clone(),n.setInterpolation(Ne)}let l=u.morphTargetInfluences.length,m=u.morphTargetDictionary[a.propertyIndex];if(m===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let c;if(s[u.uuid]===void 0){c=n.clone();let h=new c.ValueBufferType(l*c.times.length);for(let p=0;p<c.times.length;p++)h[p*l+m]=c.values[p];c.name=(a.nodeName||"")+".morphTargetInfluences",c.values=h,s[u.uuid]=c,t.push(c);continue}let d=n.createInterpolant(new n.ValueBufferType(1));c=s[u.uuid];for(let h=0;h<c.times.length;h++)c.values[h*l+m]=d.evaluate(c.times[h]);for(let h=0;h<n.times.length;h++){let p=this.insertKeyframe(c,n.times[h]);c.values[p*l+m]=n.values[h]}}return o.tracks=t,o}};export{oe as GLTFExporter};
